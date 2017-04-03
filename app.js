new Vue({
// We want to target the div with an id of 'events'
  el: '#events',
 data: {
  event: { name: '', description: '', date: '' },
  events: [],
  items : []
},

// Anything within the ready function will run when the application loads
mounted: function() {
  // When the application loads, we want to call the method that initializes
  // some data
  this.fetchEvents();
},

// Methods we want to use in our application are registered here
methods: {

  // We dedicate a method to retrieving and setting some data
  fetchEvents: function() {
    var events = [
      {
        id: 1,
        name: 'TIFF',
        description: 'Toronto International Film Festival',
        date: '2015-09-10'
      },
      {
        id: 2,
        name: 'The Martian Premiere',
        description: 'The Martian comes to theatres.',
        date: '2015-10-02'
      },
      {
        id: 3,
        name: 'SXSW',
        description: 'Music, film and interactive festival in Austin, TX.',
        date: '2016-03-11'
      }
    ];
      var items = [ {
      message: "This is a test" },
          {
      message: "This is a second test : FOO"
  }];
    // $set is a convenience method provided by Vue that is similar to pushing
    // data onto an array
    this.events = events;
    this.items = items;
      console.log("This is a test");
  },

  // Adds an event to the existing events array
  addEvent: function() {
    if(this.event.name) {
      this.events.push(this.event);
      this.event = { name: '', description: '', date: '' };
      this.items.push({message: "Added event"});
        
    }
  }
}
});