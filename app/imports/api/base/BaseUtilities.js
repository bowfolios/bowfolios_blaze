import { Profiles } from '/imports/api/profile/ProfileCollection';

export function removeAllEntities() {
  Profiles.removeAll();
}
