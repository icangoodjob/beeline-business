let $rows=$("[data-table-list] .tr:not(.thead)"),buttonSearch=document.getElementById("button-search");$("#search").on("keypress",(function(e){let t=$.trim($(this).val()).replace(/ +/g," ").toLowerCase().split(" ");13===e.keyCode&&(buttonSearch.click(),e.preventDefault(),t!==[]&&$rows.show(),$rows.hide().filter((function(e){let o=$(this).text().replace(/\s+/g," ").toLowerCase(),n=!0;return $(t).each((function(e,t){n=!!n&&~o.indexOf(t)})),n})).show())})),$("#button-delete").on("click",(e=>{$("#search").val(""),$rows.show(),$('input[name="synonyms"]').prop("checked",!1)}));