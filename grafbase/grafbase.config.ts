import { g, auth, config } from '@grafbase/sdk';

// yaha p hm schema banaenge g is used for schema creation and all
// sbse pphle user model
const User = g.model('User', {
	name: g.string().length({ min: 2, max: 20 }),
	email: g.string().unique(),
	avatarUrl: g.url(),
	desc: g.string().optional(),
	gitUrl: g.url().optional(),
	linkdinUrl: g.url().optional(),
	projects: g
		.relation(() => Project)
		.list()
		.optional(),
});
// Project model
const Project = g.model('Project', {
	title: g.string().length({ min: 3 }),
	desc: g.string(),
	image: g.url(),
	liveSiteUrl: g.url(),
	gitUrl: g.url(),
	category: g.string().search(),
	createdBy: g.relation(() => User),
});
export default config({
	schema: g,
});
