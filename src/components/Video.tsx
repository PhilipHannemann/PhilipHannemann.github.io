interface VideoProps {
  /** The source URL of the video. */
  src: string;

  /** For optional CSS classes for the video component. */
  className?: string;
}

/**
 * Renders a video component for MP4 content.
 */
export default function Video({ src, className }: VideoProps) {
  return (
    <video className={className} loop autoPlay playsInline>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
