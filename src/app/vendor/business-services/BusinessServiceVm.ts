export class BusinessCategoriesVM {
  categoryId: number;
  categoryName: string;
  isDeleted: boolean;
  isFeatured: boolean;
  imagePath?: string | null;
  services?:  Array<ServicesEntity>;
  constructor(){
    this.services = new Array<ServicesEntity>()
  }
}
export class ServicesEntity {
  servicesId: number;
  categoryId: number;
  serviceName: string;
  isActive: boolean;
  createdOn: string;
  updatedOn?: null;
  customFields?: (CustomFieldsEntity)[] | null;
  constructor(){
    this.customFields = new Array<CustomFieldsEntity>();
  }
}
export class CustomFieldsEntity {
  customFieldId: number;
  name: string;
  fieldType: number;
  filterType: number;
  isRequired: boolean;
  defaultValue?: null;
  assignToAllCategory: boolean;
  showInSearchFilter: boolean;
  maxLength: number;
  order: number;
  customFieldOptionList?: (CustomFieldOptionListEntity | null)[] | null;
  fieldTypeString: string;
  filterTypeString: string;
  constructor(){
    this.customFieldOptionList = new Array<CustomFieldOptionListEntity>();
  }
}
export class CustomFieldOptionListEntity {
  id: number;
  customFieldId: number;
  key: string;
  displayText: string;
}
