/**
 * GitHub API Integration Module
 * 
 * This module fetches Aidan's GitHub activity via the GitHub API
 * and displays it on the portfolio website.
 */

// GitHub username
const GITHUB_USERNAME = 'aidanmcdowell';

// GitHub API endpoints
const GITHUB_API_URL = 'https://api.github.com';
const REPOS_ENDPOINT = `${GITHUB_API_URL}/users/${GITHUB_USERNAME}/repos`;
const EVENTS_ENDPOINT = `${GITHUB_API_URL}/users/${GITHUB_USERNAME}/events`;

// List of featured repositories to prioritize
const FEATURED_REPOS = [
  'File-Converter',
  'SmartUp-main',
  'TheBypasser-All-Sources-',
  'YoinkEXE-Regular',
  'data-dashboard',
  'ml-sentiment-analyzer',
  'task-tracker'
];

/**
 * Fetches GitHub repositories for the user
 * @returns {Promise} - Promise that resolves to JSON data of repos
 */
async function fetchGitHubRepos() {
  try {
    const response = await fetch(REPOS_ENDPOINT);
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Sort repos to prioritize featured projects
    return data.sort((a, b) => {
      const aIndex = FEATURED_REPOS.indexOf(a.name);
      const bIndex = FEATURED_REPOS.indexOf(b.name);
      
      // If both repos are featured, sort by featured list order
      if (aIndex !== -1 && bIndex !== -1) {
        return aIndex - bIndex;
      }
      
      // If only one repo is featured, prioritize it
      if (aIndex !== -1) return -1;
      if (bIndex !== -1) return 1;
      
      // Otherwise, sort by most recently updated
      return new Date(b.updated_at) - new Date(a.updated_at);
    });
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
}

/**
 * Fetches recent GitHub activity for the user
 * @returns {Promise} - Promise that resolves to JSON data of events
 */
async function fetchGitHubActivity() {
  try {
    const response = await fetch(EVENTS_ENDPOINT);
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching GitHub activity:', error);
    return [];
  }
}

/**
 * Formats GitHub events into a readable format
 * @param {Array} events - Array of GitHub events
 * @returns {Array} - Formatted events
 */
function formatGitHubEvents(events) {
  if (!events || events.length === 0) return [];
  
  // Limit to 5 most recent events
  const recentEvents = events.slice(0, 5);
  
  return recentEvents.map(event => {
    const formattedEvent = {
      id: event.id,
      type: formatEventType(event.type),
      repo: event.repo.name.replace(`${GITHUB_USERNAME}/`, ''),
      createdAt: formatDate(event.created_at),
      url: `https://github.com/${event.repo.name}`
    };
    
    // Add additional details based on event type
    switch (event.type) {
      case 'PushEvent':
        formattedEvent.description = `Pushed ${event.payload.commits ? event.payload.commits.length : 0} commits`;
        formattedEvent.icon = 'fas fa-code-branch';
        break;
      case 'CreateEvent':
        formattedEvent.description = `Created ${event.payload.ref_type}`;
        formattedEvent.icon = 'fas fa-plus';
        break;
      case 'WatchEvent':
        formattedEvent.description = 'Starred a repository';
        formattedEvent.icon = 'fas fa-star';
        break;
      case 'ForkEvent':
        formattedEvent.description = 'Forked a repository';
        formattedEvent.icon = 'fas fa-code-branch';
        break;
      default:
        formattedEvent.description = 'Activity on GitHub';
        formattedEvent.icon = 'fab fa-github';
    }
    
    return formattedEvent;
  });
}

/**
 * Formats GitHub event type into readable text
 * @param {string} type - GitHub event type
 * @returns {string} - Formatted event type
 */
function formatEventType(type) {
  switch (type) {
    case 'PushEvent':
      return 'Push';
    case 'CreateEvent':
      return 'Create';
    case 'WatchEvent':
      return 'Star';
    case 'ForkEvent':
      return 'Fork';
    case 'PullRequestEvent':
      return 'Pull Request';
    case 'IssuesEvent':
      return 'Issue';
    case 'IssueCommentEvent':
      return 'Comment';
    default:
      return type.replace('Event', '');
  }
}

/**
 * Formats ISO date to relative time (e.g., "2 days ago")
 * @param {string} isoDate - Date in ISO format
 * @returns {string} - Relative time
 */
function formatDate(isoDate) {
  const date = new Date(isoDate);
  const now = new Date();
  const diffInSeconds = Math.floor((now - date) / 1000);
  
  if (diffInSeconds < 60) {
    return 'just now';
  }
  
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`;
  }
  
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
  }
  
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 30) {
    return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
  }
  
  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) {
    return `${diffInMonths} month${diffInMonths > 1 ? 's' : ''} ago`;
  }
  
  const diffInYears = Math.floor(diffInMonths / 12);
  return `${diffInYears} year${diffInYears > 1 ? 's' : ''} ago`;
}

/**
 * Renders GitHub activity in the specified container
 * @param {string} containerId - ID of container element
 */
async function displayGitHubActivity(containerId = 'github-activity-list') {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  // Show loading indicator
  container.innerHTML = '<p>Loading GitHub activity...</p>';
  
  try {
    // Fetch GitHub activity
    const activity = await fetchGitHubActivity();
    const formattedActivity = formatGitHubEvents(activity);
    
    if (formattedActivity.length === 0) {
      container.innerHTML = '<p>No recent GitHub activity found.</p>';
      return;
    }
    
    // Clear container
    container.innerHTML = '';
    
    // Add activity items
    formattedActivity.forEach(event => {
      const activityItem = document.createElement('div');
      activityItem.className = 'activity-item';
      activityItem.innerHTML = `
        <div class="activity-icon">
          <i class="${event.icon}"></i>
        </div>
        <div class="activity-content">
          <a href="${event.url}" target="_blank" class="activity-repo">${event.repo}</a>
          <div class="activity-description">${event.description}</div>
          <div class="activity-time">${event.createdAt}</div>
        </div>
      `;
      
      container.appendChild(activityItem);
    });
  } catch (error) {
    console.error('Error displaying GitHub activity:', error);
    container.innerHTML = '<p>Error loading GitHub activity. Please try again later.</p>';
  }
}

// Export functions
export { fetchGitHubRepos, fetchGitHubActivity, displayGitHubActivity }; 