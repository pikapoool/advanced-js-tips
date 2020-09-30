// 1. The Single Responsibility Principle - A module should be responsible to one, and only one, actor. (Должен иметь одну причину для изменения) 
import { DI } from '';

class EmployeeComponent {
	constructor() {
		this.employeeService = DI.inject('employeeService');
	}
	onEmployeeSubmit(employee) {
		this.employeeService.setProfile()
			.subscribe(_ => this.manager.show())
	}
}

// ********************************************************************************************************

import { DI } from "";

class EmployeeComponent {
  constructor() {
    DI.register(this).asKey("employee");
    this.submit = new EventEmitter();
  }
  onEmployeeSubmit(employee) {
    this.submit.nex(employee);
  }
}

class RelationshipsSetManager {
  constructor() {
    this.employee = DI.inject("employee");
    this.employeeService = DI.inject("employeeService");
    this.manager = DI.inject("manager");
    this.employee.on("submit", this.onEmployeeSubmit.bind(this));
  }
  onEmployeeSubmit(employee) {
    this.employeeService.setProfile().subscribe(this.onEmployeeSaved);
  }
  onEmployeeSaved() {
    this.manager.show();
  }
}

