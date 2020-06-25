export default {
  brandProductsTable() {
    return {
      header: [
        {
          align: "center",
          text: "",
          width: "3%",
          value: "popularity",
          class: "px-0"
        },
        {
          align: "start",
          text: "Name",
          width: "25%",
          value: "name"
        },
        {
          text: "Selling Price",
          width: "13%",
          value: "price"
        },
        {
          text: "In Stock",
          width: "12%",
          value: "stock"
        },
        {
          text: "Total Sales",
          width: "12%",
          value: "sales"
        },
        {
          align: "center",
          text: "Colors",
          width: "20%",
          value: "colors",
          class: "px-3"
        },
        {
          text: "Rating",
          width: "15%",
          value: "rating"
        }
      ]
    };
  }
};
