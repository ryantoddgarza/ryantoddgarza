import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `TextBlockSection`.
 */
export type TextBlockSectionProps = SliceComponentProps<Content.TextBlockSectionSlice>;

/**
 * Component for "TextBlockSection" Slices.
 */
const TextBlockSection = ({ slice }: TextBlockSectionProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      Placeholder component for text_block_section (variation: {slice.variation}) Slices
    </section>
  );
};

export default TextBlockSection;
