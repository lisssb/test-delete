import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  title:	faker.lorem.sentence,		//	using	faker
  author()	{return	faker.name.findName();	},
  year:	faker.date.past
});
