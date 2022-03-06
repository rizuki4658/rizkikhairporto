export interface Button {
  name?: string | null | undefined;
  title?: string | null | undefined;
  type?: string | null | undefined;
  target?: string | null | undefined;
  customClass?: string | null | undefined;
  outlined?: boolean | null | undefined;
  text?: boolean | null | undefined;
  onClick?: () => void | undefined;
  link?: string | null | undefined;
  children?: any;
  icon?: string | null | undefined;
}