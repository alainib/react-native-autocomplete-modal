# react-native-autocomplete-modal

![enter image description here](https://img15.hostingpics.net/pics/305431screenshot.png)



This is a little componant to get autocomplete on a input field

- inital state : display a row with "icone"+ input + "clear button"
- when you click on the input it open a modal with the same previous row display, and will display autocompleted items bottom it. the items are returned from the autocompleteCallback function.
- when you click on an item,  it set it with onSelectCallback function and close modal 


    
- need to install react-native-vector-icons and link it :
    https://github.com/oblador/react-native-vector-icons


	
	
	
usage : 


    import Autocomplete from "./Autocomplete";
    ....
    
    <Autocomplete
    	title={"city name"}                       // title in the modal 
    	placeholder={"city"}    // placeholder
    	value={this.state.city}                      // init value 
    	iconname={"location-arrow"}                   // the icon name from "react-native-vector-icons/FontAwesome";
    	autocompleteCallback={value =>                 // the fonction called on each input modification to get autocompleted datas
    		autocompleteCities(value).then(res => { return res;}).catch(error => console.error(error))}
    	onSelectCallback={specie => this.setState({ specie })}  // function for what to do when you select an autocompleted item 
    	onClearCallback={values => {                            // function for what to do when you click on clear button on the right 
    		this.setState({ specie: null })
    	}}
    />


#any advice are welcomed :)


- knowed "bug": 
you need to click twice on an item to set it ( first time close the keyboard, need to solve this )


