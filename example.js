   
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