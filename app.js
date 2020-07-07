const app = new Vue({
    el: "#app",
    data: {
      todo: [],
      title: ''
    },
    mounted:function () {
        const ls = localStorage.getItem('vue-todo')
        if (ls){
            this.todo = JSON.parse(ls)
        } 
    },
    watch: {
        todo: function () {
            localStorage.setItem('vue-todo', JSON.stringify(this.todo))
        }
    },
    methods: {
        addItem: function() {
          this.todo.push({'title': this.title, completed: false})
        },
        completed2: function (e) {
            temp = this.todo[e.target.dataset.index]
            temp.completed = !temp.completed
            this.todo.splice(e.target.dataset.index, 1, temp)
        },
        remove: function(e){
            this.todo.splice(e.target.dataset.index, 1)
        }
    }
    
  })
  