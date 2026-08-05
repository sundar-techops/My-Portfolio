/**
 * Convert a Google Drive share link into an embeddable preview URL.
 *
 * Supports formats:
 *   - https://drive.google.com/file/d/FILE_ID/view?usp=sharing
 *   - https://drive.google.com/open?id=FILE_ID
 *   - https://drive.google.com/uc?id=FILE_ID&export=download
 *
 * Returns: https://drive.google.com/file/d/FILE_ID/preview
 */
export function convertDriveUrl(rawUrl) {
  if (!rawUrl) return '';

  // Pattern 1: /file/d/FILE_ID/
  let match = rawUrl.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (match) {
    return `https://drive.google.com/file/d/${match[1]}/preview`;
  }

  // Pattern 2: ?id=FILE_ID or &id=FILE_ID
  match = rawUrl.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (match) {
    return `https://drive.google.com/file/d/${match[1]}/preview`;
  }

  // If no pattern matched, return the original URL
  return rawUrl;
}
