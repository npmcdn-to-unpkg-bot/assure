import { Injectable } from '@angular/core';

@Injectable()
export class EntityService {
  selectedEntityId: number = 0;

  setEntity(entityId:number){
    this.selectedEntityId = entityId;
  }
}

