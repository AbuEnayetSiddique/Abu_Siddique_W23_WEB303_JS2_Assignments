/*
    Assignment 05
	Abu Enayet Siddique
*/

$(document).ready(function () {

	// ContentItem class
	class ContentItem {
		id;
		name;
		description;
		category;
		
	  constructor(id, name, description, category) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.category = category;
	  }

	  // Update content item properties
	  updateContentItem(id, name, description, category) {
		if (id === this.id) {
		  if (name) {
			this.name = name;
		  }
		  if (description) {
			this.description = description;
		  }
		  if (category) {
			this.category = category;
		  }
		}
	  }

	  // Generate HTML string for content item
	  toString() {
		return `
		  <div class="content-item-wrapper" id="content-item-${this.id}">
			<h2>${this.name}</h2>
			<p>${this.description}</p>
			<div><i>${this.category}</i></div>
		  </div>
		`;
	  }
	}

	// Theme for content items
	const theme = "My Favorite Leaders";

	// Array of content items
	const contentItems = [
	  new ContentItem(0, "Mahatma Gandhi", "<b>Mohandas Karamchand Gandhi</b>, was an Indian revolutionary, anti-colonial nationalist, and political ethicist who employed nonviolent resistance to lead the successful campaign for India's independence from British rule and later inspire movements for civil rights and freedom across the world.", theme),
	  new ContentItem(1, "Winston Churchill", "Sir <b>Winston Leonard Spencer Churchill</b> was a British statesman, soldier, and writer who served as Prime Minister of the United Kingdom twice. </br> He was a Member of Parliament (MP) from 1900 to 1964 and represented a total of five constituencies. Ideologically an economic liberal and imperialist.", theme),
	  new ContentItem(2, "Abraham Lincoln", "<b>Abraham Lincoln</b> was an American lawyer, politician, and statesman who served as the 16th president of the United States from 1861 until his assassination in 1865. </br> Lincoln led the Union through the American Civil War to defend the nation as a constitutional union and succeeded in abolishing slavery, bolstering the federal government, and modernizing the U.S. economy.", theme),
	  new ContentItem(3, "Sheikh Mujibur Rahman", "<b>Sheikh Mujibur Rahman</b> was a Bangladeshi politician, statesman and the founding leader of the People's Republic of Bangladesh. He first served as the titular president of the Provisional Government of Bangladesh between April 1971 and January 1972. ", theme),
	  new ContentItem(4, "Nelson Mandela", "<b>Nelson Rolihlahla Mandela</b> was a South African anti-apartheid activist and politician who served as the first president of South Africa from 1994 to 1999. </br> He was the country's first black head of state and the first elected in a fully representative democratic election. His government focused on dismantling the legacy of apartheid by fostering racial reconciliation.", theme)
	];

	// Add content items to page
	const $contentItemList = $("#content-item-list");

	contentItems.forEach(contentItem => {
	  $contentItemList.append($(contentItem.toString()).css({
		border: "1px dotted black",
		borderRadius: "10px",
		width: "95%",
		padding: "5px",
		margin: "10px auto",
		textAlign: "center"
	  }));
	});

});


