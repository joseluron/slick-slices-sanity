import { MdPerson as icon } from 'react-icons/md';

export default {
  // Computer name
  name: 'person',

  // Visible name
  title: 'Slicemasters',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Slicemaster name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Tell us more about this person',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
