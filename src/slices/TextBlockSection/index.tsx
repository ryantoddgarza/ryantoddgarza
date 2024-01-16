import { Content } from '@prismicio/client';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import styles from './textBlockSection.module.scss';

export type TextBlockSectionProps =
  SliceComponentProps<Content.TextBlockSectionSlice>;

const TextBlockSection = ({ slice }: TextBlockSectionProps): JSX.Element => {
  function getSectionClasses(): string {
    const classes: string[] = [styles.base];

    return classes.join(' ');
  }

  return (
    <section
      className={getSectionClasses()}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <PrismicRichText field={slice.primary.body_copy} />
        </div>
      </div>
    </section>
  );
};

export default TextBlockSection;
