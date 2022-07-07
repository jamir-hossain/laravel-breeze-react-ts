const getErrors = (error: any) => {
  const errors: any[] = [];
  Object.keys(error.response.data.errors).map((item) => {
    const content = {
      type: item,
      message: error.response.data.errors[item][0],
    };
    errors.push(content);
  });

  return errors;
};

export default getErrors;
