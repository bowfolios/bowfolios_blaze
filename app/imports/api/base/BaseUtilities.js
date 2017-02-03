import { Profiles } from '/imports/api/profile/ProfileCollection';
import { Interests } from '/imports/api/interest/InterestCollection';

export function removeAllEntities() {
  Profiles.removeAll();
  Interests.removeAll();
}
