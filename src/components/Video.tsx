interface VideoProps {
  src: string;
  className?: string;
}

export default function Video({ src, className }: VideoProps) {
  return (
    <video className={className} loop autoPlay>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
