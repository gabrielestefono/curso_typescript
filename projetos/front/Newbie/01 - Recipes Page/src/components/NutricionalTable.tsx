export default function NutricionalTable() {
  return (
    <div>
      <h2>Nutrition</h2>
      <table>
        <tr>
          <th colSpan={2}>
            The table below shows nutritional values per serving without the
            additional fillings.
          </th>
        </tr>
        <tr>
          <td>Calories</td>
          <td>277kcal</td>
        </tr>
        <tr>
          <td>Carbs</td>
          <td>0g</td>
        </tr>
        <tr>
          <td>Protein</td>
          <td>20g</td>
        </tr>
        <tr>
          <td>Fat</td>
          <td>22g</td>
        </tr>
      </table>
    </div>
  );
}
