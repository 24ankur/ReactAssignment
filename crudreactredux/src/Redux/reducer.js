const initialstate = {
    blogs: [
        { id: 1, blogTitle: "Bright Bazaar", blogDescription: "Bright Bazaar was created by Will Taylor, a journalist-turned-interior designer in 2009. Apart from wonderful home tours and design findings, Will shares other exciting details about his lifestyle, including his outfits, recipes, and life in New York City." },
        { id: 2, blogTitle: "My Fitness Pal", blogDescription: "My Fitness Pal is an online platform that helps people lose weight. The site also offers a great set of mobile apps that allow users to keep track of their weight, exercise regularly, and more. The site also has a lively blog section where users can learn more about all things related to fitness." },
        { id: 3, blogTitle: "Our Food Stories", blogDescription: "Laura Muthesius and Nora Eisermann decided to start a blog after Laura discovered her food allergies. That’s why Our Food Stories features plenty of innovative recipes. The Berlin-based duo mixed their passions (food styling and photography) to make a successful and original food blog." }
    ]
};

const reducer = (state = initialstate, action) => {
    switch (action.type) {
        case 'GET_BLOG':
            return {
                ...state
            };
        case 'ADD_BLOG':
            return {
                ...state,
                blogs: state.blogs.concat(action.payload)
            };
        case 'EDIT_BLOG':
            return {
                ...state,
                blogs: state.blogs.map(
                    (content, i) => content.id === action.payload.id ? {...content, blogTitle : action.payload.blogTitle ,  blogDescription : action.payload.blogDescription }
                                            : content)
            };
        case 'DELETE_BLOG':
            return {
                ...state,
                blogs: state.blogs.filter(item => item.id !== action.payload)
            };
        default:
            return state;
    }
};

export default reducer;
