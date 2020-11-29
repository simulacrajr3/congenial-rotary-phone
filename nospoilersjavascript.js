<script type="text/javascript">
	
	
	
    <!-- get Matchday -->
  //<![CDATA[

  function filterTable() {
    // Variables
    let dropdown, table, rows, cells, Matchday, filter;
    dropdown = document.getElementById("MatchdayDropdown");
    table = document.getElementById("myTable");
    rows = table.getElementsByTagName("tr");
    filter = dropdown.value;

    // Loops through rows and hides those with countries that don't match the filter
    for (let row of rows) { // `for...of` loops through the NodeList
      cells = row.getElementsByTagName("td");
      Matchday = cells[1] || null; // gets the 2nd `td` or nothing
      // if the filter is set to 'All', or this is the header row, or 2nd `td` text matches filter
      
//]]>
</script>
