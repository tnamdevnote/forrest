import {defineType, defineField} from 'sanity'

export const leadershipType = defineType({
  name: 'leadership',
  title: 'Leadership',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Full name of the leadership member',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      description: 'Position within the group',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'biography',
      title: 'Biography',
      type: 'string',
      description:
        'A few paragraphs detailing their background, interests, connection to the youth group.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'contact_information',
      title: 'Contact Information',
      type: 'string',
      description: 'Phone Number',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      description: 'Profile image',
      validation: (rule) => rule.required(),
    }),
  ],
})
