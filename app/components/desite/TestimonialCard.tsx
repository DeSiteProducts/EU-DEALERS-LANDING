import { ImagePlaceholder } from "./ImagePlaceholder";

export function TestimonialCard({
  story,
}: {
  story: {
    name: string;
    location: string;
    machine: string;
    photo: string;
    jobsite: string;
    quote: string;
  };
}) {
  return (
    <article className="testimonial-card">
      <div className="testimonial-media">
        <ImagePlaceholder label={`${story.name} customer photo`} path={story.photo} />
        <ImagePlaceholder label={`${story.name} jobsite photo`} path={story.jobsite} />
      </div>
      <blockquote>{story.quote}</blockquote>
      <div className="testimonial-meta">
        <strong>{story.name}</strong>
        <span>{story.location}</span>
        <span>{story.machine}</span>
      </div>
    </article>
  );
}
