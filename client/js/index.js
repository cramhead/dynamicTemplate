Meteor.subscribe("Items");


// Template.layout.rendered = function () {
// 	 $(".simple").each(function(index, element){
// 	 	$(element).replaceWith(Spark.render(Template['simple']));
// 	 });

// 	 $(".complex").each(function(index, element){
// 	 	$(element).replaceWith(Spark.render(Template['complex']));
// 	 });
// }; 

Template.layout.items = function(){
	return Items.find();
}
	
// Template.simple.items = function(){
// 	return Items.find({name: {$regex: '[9]+', $options: 'i'}});
// }; 

// Template.complex.items = function(){
// 	return Items.find({name: {$regex: '[^9+]', $options: 'i'}});
// }; 


// Template.layout.typeIs =function(type){
// 	if(type === 0){
// 		return true;
// 	}else{
// 		return false;
// 	}
// }


Template.layout.typeIs =function(type){
	if(type === 0){
		return Template.simple;
	}else if(type === 1){
		return Template.complex;
	}else{
		return Template.other;
	}
}

// Template.simple.helpers({
// 	name: function () {
// 		return "marc";
// 	}, 
// 	value: function(){
// 		return "hey";
// 	}
// }); 


// Template.complex.helpers({
// 	name: function () {
// 		return "marc";
// 	}, 
// 	value: function(){
// 		return "hey";
// 	}
// }); 

Template.simple.events({
	'click div': function () {
		console.log("simple click");
	}
});

Template.complex.events({
	'click div': function () {
		console.log("complex click");
	}
});


Template.other.events({
	'click div': function () {
		console.log("third type click");
	}
});