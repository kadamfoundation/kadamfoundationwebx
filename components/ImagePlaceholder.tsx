import Icon from '@/components/Icon';
import { cn } from '@/lib/utils';

export default function ImagePlaceholder({
  alt,
  label = 'Photo pending',
  className,
}: {
  alt: string;
  label?: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={cn(
        'flex h-full w-full items-center justify-center bg-surface-clay-soft p-5 text-center text-text-secondary',
        className,
      )}
    >
      <span className="flex flex-col items-center gap-2">
        <Icon name="image" className="text-3xl" />
        <span className="font-eyebrow text-eyebrow uppercase">{label}</span>
      </span>
    </div>
  );
}