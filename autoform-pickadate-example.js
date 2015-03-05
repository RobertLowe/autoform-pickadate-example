Posts = new Mongo.Collection("Posts");
Posts.attachSchema(new SimpleSchema({
  happenedAt: {
    type: Date,
    optional: true,
    autoform: {
      afFieldInput: {
        pickadateOptions: {
          selectMonths: true,
          selectYears: 300,
          min: void 0,
          max: new Date()
        },
        type: 'pickadate'
      }
    }
  }
}));
