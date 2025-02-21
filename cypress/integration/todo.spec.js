describe('Todo List Application', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    });
  
    it('should display the correct columns', () => {
      cy.contains('To Do').should('be.visible');
      cy.contains('In Progress').should('be.visible');
      cy.contains('Done').should('be.visible');
    });
  
    it('should add a new todo', () => {
      cy.get('input[placeholder="Add a new task"]').type('New Todo');
      cy.contains('Add Task').click();
      cy.contains('New Todo').should('be.visible');
    });
  
    it('should update the status of a todo', () => {
      cy.contains('Test Todo 1').parent().find('select').select('progress');
      cy.contains('In Progress').parent().contains('Test Todo 1').should('be.visible');
    });
  
    it('should delete a todo', () => {
      cy.contains('Test Todo 1').parent().contains('X').click();
      cy.contains('Test Todo 1').should('not.exist');
    });
  });