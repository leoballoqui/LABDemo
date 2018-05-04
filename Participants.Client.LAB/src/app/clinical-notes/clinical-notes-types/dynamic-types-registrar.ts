interface DynamicComponent {}

type DynamicComponentClass = { new (): DynamicComponent };

const REGISTRY = new Map<string, DynamicComponentClass>();

export function getTypeFor(name: string): DynamicComponentClass {
  return REGISTRY.get(name);
}

export function registerDynamicClinicNoteType(dc: DynamicComponent, identifier: string): void {
  let cls = dc as DynamicComponentClass;
  REGISTRY.set(identifier, cls);
}


