import {ReclamationStatus} from "./ReclamationStatus";
import {CategoryReclamation} from "./CategoryReclamation";

export interface Reclamation {
  id: number;
  createdAt: Date;
  description: string;
  status: ReclamationStatus;
  title: string;
  categoryReclamations: CategoryReclamation[];

}
