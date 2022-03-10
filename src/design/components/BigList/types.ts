export interface BigListItem {
  name: string;
  url?: string;
}

export interface BigListProps {
  list: BigListItem[];
  numbered?: boolean;
}
