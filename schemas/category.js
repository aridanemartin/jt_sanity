export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      title: 'Color',
      name: 'color',
      description: 'Elige el color de la categoría',
      type: 'string',
      initialValue: 'azulOscuro',
      options: {
        list: [
          { title: 'Azul Claro', value: 'azulClaro' },
          { title: 'Azul Oscuro', value: 'azulOscuro' },
          { title: 'Salmón', value: 'salmon' },
          { title: 'Dorado', value: 'dorado' }, 
        ],
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
}
