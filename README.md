# react-native-autocomplete-modal
- version 0.0.1 


this is a little componant to get autocomplete on a input field
inital state : display a row with "icone"+ input + "clear button"
when you clik on the input it open a modal with the same previous row, and will display autocompleted item bottom it.
when you clik on item, set it with onSelectCallback function and close modal 
    
need to install react-native-vector-icons and link it :
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


any advice are welcomed :)