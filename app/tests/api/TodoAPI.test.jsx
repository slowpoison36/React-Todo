 var expect = require("expect");

 var TodoAPI = require("TodoAPI");

 describe("TodoAPI",()=>{
   beforeEach(()=>{
     localStorage.removeItem("todos");
   })
   it("should exits",()=>{
     expect(TodoAPI).toExist();
   });

   describe("setItem",()=>{
     it("should validiate the array when valid array",()=>{
       var todos = [
         {
           id:1,
           text:'testing 1',
           completed:false
         }
       ];
       TodoAPI.setTodos(todos);
       var actualTodos = JSON.parse(localStorage.getItem("todos"));
       expect(actualTodos).toEqual(todos);

     });

     it("should set invalid todo array",()=>{
       var badTodos = {a:"b"};
       TodoAPI.setTodos(badTodos);
       expect(localStorage.getItem("todos")).toBe(null);
     })
   })
   describe("getItem",()=>{
     it("should not get empty array ",()=>{
       expect(TodoAPI.getTodos()).toEqual([]);
     })
     it("should return valid todo if valid array in localStorage ",()=>{
       var todos = [
         {
           id:1,
           text:'testing 1',
           completed:false
         }
       ];
       localStorage.setItem("todos",JSON.stringify(todos));
       expect(TodoAPI.getTodos()).toEqual(todos);
     })
   })
    describe("filteredTodos",()=>{
      var todos = [{
        id:1,
        text:"one",
        completed:true
      },
      {
        id:2,
        text:"two",
        completed:false
      },
      {
        id:3,
        text:"three",
        completed:false
      },

    ]
      it("should show the filtered array when showCompleted is true",()=>{
        var filteredTodos = TodoAPI.filteredTodos(todos,true,"");
        expect(filteredTodos.length).toBe(3)
      });
      it("should show the filtered array when showCompleted is false",()=>{
        var filteredTodos = TodoAPI.filteredTodos(todos,false,"");
        expect(filteredTodos.length).toBe(2);
      });
      it("should sort array based on completed status",()=>{
        var filteredTodos = TodoAPI.filteredTodos(todos,true,"");
        expect(filteredTodos[0].completed).toBe(false);
      })
      it("should filter todos when searchText is true",()=>{
        var filteredTodos = TodoAPI.filteredTodos(todos,true,"three");
        expect(filteredTodos.length).toBe(1)
      });
      it("should show the filtered array when showCompleted is false",()=>{
        var filteredTodos = TodoAPI.filteredTodos(todos,true,"");
        expect(filteredTodos.length).toBe(3)
      });





    })
 })
