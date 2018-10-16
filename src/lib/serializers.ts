import {AttributeSerializer} from './updating-element';

export const JsonSerializer: AttributeSerializer = {
  fromAttribute(val: string): unknown {
    return JSON.parse(val);
  },
  toAttribute(val: unknown): string|null {
    if (val === undefined || val === null) {
      return null;
    }
    return JSON.stringify(val);
  }
};;
