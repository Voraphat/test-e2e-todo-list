// describe('Todo List Application', () => {
//   beforeEach(() => {
//     cy.visit('http://localhost:3000');
//   });

//   it('should display the correct columns', () => {
//     cy.contains('To Do').should('be.visible');
//     cy.contains('In Progress').should('be.visible');
//     cy.contains('Done').should('be.visible');
//   });

//   it('should add a new todo', () => {
//     cy.get('input[placeholder="Add a new task"]').type('New Todo');
//     cy.contains('Add Task').click();
//     cy.contains('New Todo').should('be.visible');
//   });

//   it('should update the status of a todo', () => {
//     cy.contains('Test Todo 1').parent().find('select').select('progress');
//     cy.contains('In Progress').parent().contains('Test Todo 1').should('be.visible');
//   });

//   it('should delete a todo', () => {
//     cy.contains('Test Todo 1').parent().contains('X').click();
//     cy.contains('Test Todo 1').should('not.exist');
//   });
// });


describe('Todo List Application', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should add a new todo', () => {
    cy.get('input[placeholder="Add a new task"]').type('New Todo');
    cy.contains('Add Task').click();
    cy.contains('New Todo').should('be.visible');
  });
  

  it('should update the status of a todo', () => {
    cy.get('body > div > div.column.todo > div.todo-list > div:nth-child(1) > div.flex > select')
    .select('progress'); // Replace 'yourOptionValue' with the option's value you want to select  
  });

  it('should update the status of a todo', () => {
    cy.get('body > div > div.column.in-progress > div > div:nth-child(1) > div.flex > select')
    .select('done'); 
  });
  

  it('should delete a todo', () => {
    cy.wait(1000);
    cy.get('body > div > div.column.in-progress > div > div:nth-child(1) > div:nth-child(2) > button')
    .click();
  });

});
