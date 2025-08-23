export const handleShare = async ({
  url,
  msg,
}: {
  url?: string;
  msg?: string;
}) => {
  const absoluteUrl = url
    ? new URL(url, window.location.origin).href
    : window.location.href;

  if (navigator.share) {
    try {
      await navigator.share({
        title: 'Share with your friends on Social Media | TENET 2025',
        text: msg,
        url: absoluteUrl,
      });
    } catch (error) {
      console.error('Error sharing:', error);
    }
  } else {
    alert('Web Share API is not supported in your browser.');
  }
};
