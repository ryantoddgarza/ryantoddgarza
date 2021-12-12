export interface BigListItem {
  name: string;
  link?: string;
}

export interface BigListProps {
  list: BigListItem[];
  numbered?: boolean;
}
