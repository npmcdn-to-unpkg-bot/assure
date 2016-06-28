export class Entity {
  entity_id: number;
  entity_code: string;

  constructor(data: {
    entity_id?: number,
    entity_code?: string
  } = {}) {
    this.entity_id = this.entity_id === undefined ? 0 : data.entity_id;
    this.entity_code = data.entity_code || '';
  }
}

