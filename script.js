var app = new Vue({
    el: '#app',
    data: {
        movies: [
            {
                title: "Iron Man",
                release: 1,
                score: 93,
            },
            {
                title: "The Incredible Hulk",
                release: 2,
                score: 67,
            },
            {
                title: "Iron Man 2",
                release: 3,
                score: 73,
            },
            {
                title: "Thor",
                release: 4,
                score: 77,
            },
            {
                title: "Captain America: The First Avenger",
                release: 5,
                score: 80,
            },
            {
                title: "The Avengers",
                release: 6,
                score: 92,
            },
            {
                title: "Iron Man 3",
                release: 7,
                score: 80,
            },
            {
                title: "Thor: The Dark World",
                release: 8,
                score: 66,
            },
            {
                title: "Captain America: The Winter Soldier",
                release: 9,
                score: 90,
            },
            {
                title: "Guardians of the Galaxy",
                release: 10,
                score: 91,
            },
            {
                title: "Avengers: Age of Ultron",
                release: 11,
                score: 75,
            },
            {
                title: "Ant-Man",
                release: 12,
                score: 82,
            },
            {
                title: "Captain America: Civil War",
                release: 13,
                score: 91,
            },
            {
                title: "Doctor Strange",
                release: 14,
                score: 89,
            },
            {
                title: "Guardians of the Galaxy Vol. 2",
                release: 15,
                score: 84,
            },
            {
                title: "Spider-Man: Homecoming",
                release: 16,
                score: 92,
            },
            {
                title: "Thor: Ragnarok",
                release: 17,
                score: 92,
            },
            {
                title: "Black Panther",
                release: 18,
                score: 97,
            },
            {
                title: "Avengers: Infinity War",
                release: 19,
                score: 85,
            },
            {
                title: "Ant-Man and the Wasp",
                release: 20,
                score: 88,
            }, 
        ],
        customSorts: [],
        isCustomSort: false,
        drag: {},
        customSortName: '',
    },
    methods: {
        addCustomSort() {
            var customSort = {
                movies: this.movies.slice(),
                name: this.customSortName
            }
            this.customSorts.push(customSort);
            this.isCustomSort = false;
            this.customSortName = '';
        },
        customSort(sort) {
            this.isCustomSort = false;
            this.movies = sort.movies.slice();
        } ,
        toggleCustomSort() {
            this.isCustomSort = !this.isCustomSort;
        },
        sortByRT() {
            this.isCustomSort = false;
            this.movies.sort(this.compareScores);
        },
        sortByName() {
            this.isCustomSort = false;
            this.movies.sort(this.compareTitle);
        },
        sortByRelease() {
            this.isCustomSort = false;
            this.movies.sort(this.compareRelease);
        },
        dragItem(movie) {
            this.drag = movie;
        },
        dropItem(movie) {
            const indexItem = this.movies.indexOf(this.drag);
            const indexTarget = this.movies.indexOf(movie);
            this.movies.splice(indexItem, 1);
            this.movies.splice(indexTarget, 0, this.drag); 
        },
        compareScores(a, b) {
            if (a.score > b.score)
                return -1;
            if (a.score < b.score)
                return 1;
            return 0;
        },
        compareRelease(a, b) {
            if (a.release < b.release)
                return -1;
            if (a.release > b.release)
                return 1;
            return 0;
        },
        compareTitle(a, b) {
            if (a.title < b.title)
                return -1;
            if (a.title > b.title)
                return 1;
            return 0;
        }
    },
    computed: {
        activeTodos() {
            return this.todos.filter(item => {
                return !item.completed;
            });
        },
        filteredTodos() {
            if (this.show === 'active')
                return this.todos.filter(item => {
                    return !item.completed;
                });
            if (this.show === 'completed')
                return this.todos.filter(item => {
                    return item.completed;
                });
            return this.todos;
        },
    }    
});