
const getAlertTemplate = ( title, type ) => {
  return (
    {
      title: title,
      position: 'top',
      status: ( Boolean( type )) ? type : 'info',
      duration: 1000,
      isClosable: true,
    }
  );
}

export default getAlertTemplate