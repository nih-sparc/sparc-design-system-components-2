<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <el-icon><Folder /></el-icon>

    <el-select
      v-model="month"
      class="mr-8 month"
      placeholder="Month"
    >
      <el-option
        v-for="(month, index) in months"
        :key="index"
        :label="month"
        :value="month"
      />
    </el-select>
    <el-input-number
      v-model="year"
      controls-position="right"
      placeholder="Year"
      :precision="0"
      :min="2000"
      :max="2040"
      disabled
    />

    <div>

    <sparc-checkbox
      v-for="item in checkboxItem"
      v-bind:key="item.label"
      v-model="checkboxVal2"
      :label="item.label"
      :disabled="item.disabled"
      :display="item.display"
    />
  </div>
  
  <div>
    <sparc-checkbox
      v-model="checkboxVal"
      label="1"
      :disabled="true"
      display="Option 1"
    />
    <sparc-checkbox
      v-model="checkboxVal"
      label="2"
      :disabled="false"
      display="Option 2"
    />
  </div>
 

    <SparcLogo></SparcLogo>
    <breadcrumb-trail
        :breadcrumb="breadcrumbs"
        link-component="router-link"
        title="Level 3 this should be truncated "
      />

    <div class="tooltip">
      <sparc-tooltip v-for="dir in tooltipDirs" :key="dir" :placement="dir">
        <template v-slot:data>
          <div>
            {{ dir }}<br/>THIS IS <a href="#">ALOT</a> OF TEXT
          </div>
        </template>
        <template v-slot:item>
          <el-button>{{ dir }}</el-button>
        </template>
      </sparc-tooltip>
    </div>
    <sparc-tooltip placement="top-center" is-repeating-item-content>
      <template v-slot:data><div>Only show this tooltip if content is cutoff</div></template>
      <template v-slot:item><div class="tooltip-item">Only show tooltip when this has ellipsis</div></template>
    </sparc-tooltip>
    <el-button class="primary">Primary Button</el-button>
    <el-button class="secondary">Secondary Button</el-button>
    <el-button
      @click="openSuccessMessage">
      Show Success Notification
    </el-button>
    <el-button
      @click="openInfoMessage">
      Show Info Notification
    </el-button>
    <el-button
      @click="openFailMessage">
      Show Failure Notification
    </el-button>
    <el-button
      @click="openNotification">
      Show Notification
    </el-button>
    <el-button
      @click="openNotificationWithIcon">
      Show Notification with Icon
    </el-button>
    <el-col>
        <el-row>
          <icon-card
            :title="iconCardData.title"
            :icons="iconCardData.icons"
          />
        </el-row>
      </el-col>
     
    <el-table
      :data="tableData"
      :default-sort = "{prop: 'name', order: 'descending'}"
      empty-text="No Results"
    >
      <el-table-column
        :fixed="true"
        prop="name"
        label="Title"
        sortable
        width="160"
      >
        <template v-slot="scope">
          <a href="#">{{ scope.row.name }}</a>
        </template>
      </el-table-column>
      <el-table-column prop="banner" label="Image" width="160">
        <template v-slot="scope">
          <img
            :src="scope.row.banner"
            alt="Banner image"
            height="128"
            width="128"
          />
        </template>
      </el-table-column>
      <el-table-column prop="description" label="Description" :min-width="400" width="auto" sortable />
      <el-table-column width="40" />
      <el-table-column prop="createdAt" label="Last Published" width="150" sortable>
        Febuary 20, 2020
      </el-table-column>
      <el-table-column prop="size" label="Size" width="100" sortable>
        780.29 GB
      </el-table-column>
    </el-table>
    <el-button @click="openDialog">
      Show Dialog
    </el-button>
    <el-dialog
      v-model="dialogVisible"
      :show-close="true"
      title="Test Dialog"
      @close="dialogVisible = false"
    >
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra aliquet eget sit amet tellus cras adipiscing enim eu.
      </div>
      <template #footer>
        <el-button @click="dialogVisible = false">
          Close
        </el-button>
      </template>
    </el-dialog>
    <large-modal
      :visible="dialogVisibleLarge"
      @close-download-dialog="dialogVisibleLarge = false"
    >
      <template #optionalContent>
        <h1>Direct download</h1>
        <div>
          <p>You can download the raw files and metadata directly to your computer as a zip archive free of charge.</p>
          <p class="download-container__download-dataset-size">
            Dataset Size: 17.43 GB
          </p>
          <el-button class="download-button">Download</el-button>
        </div>
      </template>
      <template #mainContent>
        <h1>Download from AWS</h1>
        <p>
          Raw files and metadata are stored in an AWS S3 Requester Pays bucket.
          You can learn more about downloading data from AWS on our
          <a href="/#" target="_blank">Help Page</a>.
        </p>
        <div>
          <p>*Requester pays means that any costs associated with downloading the data will be charged to your AWS account.
            For transfer pricing information, visit the <a href="https://aws.amazon.com/s3/pricing/" target="blank">AWS Pricing documentation.</a>
          </p>
          <div>
          <el-button class="secondary" @click="dialogVisibleLarge = false">
            Close
          </el-button>
          </div>
        </div>
      </template>
    </large-modal>
    <el-button
      plain
      @click="dialogVisibleLarge = true">
      Open Large Modal
    </el-button>
    <div>
      <sparc-radio
        v-model="radioVal"
        label="1"
        :disabled="false"
        display="Option 1"
      />    
      <sparc-radio
        v-model="radioVal"
        label="2"
        :disabled="false"
        display="Option 2"
      />
    </div>
    <div>
      <sparc-radio
        v-for="r in radios"
        v-bind:key="r.label"
        v-model="radioVal2"
        :label="r.label"
        :disabled="r.disabled"
        :display="r.display"
      />
    </div>
    <el-col>
    <el-row class="event-card-row">
         
            <event-card
              :eventType="eventCardEvent.type"
              :eventImage="eventCardEvent.image"
              :title="eventCardEvent.title"
              :startDate="eventCardEvent.startDate"
              :endDate="eventCardEvent.endDate"
              :location="eventCardEvent.location"
              :url="eventCardEvent.url"
            />
            <event-card
              :eventType="eventCardEvent.type"
              :eventImage="eventCardEvent.image"
              :title="eventCardEvent.title"
              :startDate="eventCardEvent.startDate"
              :endDate="eventCardEvent.endDate"
              :location="eventCardEvent.location"
              :url="eventCardEvent.url"
            />
            <event-card
              :eventType="eventCardEvent.type"
              :eventImage="eventCardEvent.image"
              :title="eventCardEvent.title"
              :startDate="eventCardEvent.startDate"
              :endDate="eventCardEvent.endDate"
              :location="eventCardEvent.location"
              :url="eventCardEvent.url"
            />
            <event-card
              :eventType="eventCardEvent.type"
              :eventImage="eventCardEvent.image"
              :title="eventCardEvent.title"
              :startDate="eventCardEvent.startDate"
              :endDate="eventCardEvent.endDate"
              :location="eventCardEvent.location"
              :url="eventCardEvent.url"
            />
        </el-row>
      </el-col>
      <multi-select
        :options="multiLevelSelectOptions"
      />
      <multi-select
        :options="singleLevelSelectOptions"
      />
    <el-col class="dropdown-multiselect">
      <el-row>
        <dropdown-multiselect
          :category="oneOptionsDropdownMultiselectCategory"  
        />
      </el-row>
      <el-row>
        <dropdown-multiselect
          :category="twoOptionsDropdownMultiselectCategory"  
          :tooltip="dropdownMultiselectTooltip"
        />
      </el-row>
      <el-row>
        <dropdown-multiselect
          :category="nineOptionsDropdownMultiselectCategory" 
        />
      </el-row>
      <el-row>
        <dropdown-multiselect
          :category="fifteenOptionsDropdownMultiselectCategory" 
        />
      </el-row>
      <el-row>
        <dropdown-multiselect
          :category="multiLevelDropdownMultiselectCategory" 
        />
      </el-row>
    </el-col>
    <el-col>
        <el-row>
          <content-overview-card
            :subtitle="contentOverviewCard.subtitle"
            :title="contentOverviewCard.title"
            :description="contentOverviewCard.description"
            :image="contentOverviewCard.image"
          >
            <template #metadata>
              <div v-for="property in contentOverviewCard.metadata"
              class="metadata-content"
              :key="property.title"
            >
              <div class="metadata-title">
                {{property.title}}
              </div>
              <div>
                {{property.value}}
              </div>
              </div>
            </template>
            <template #buttons>
              <a
                href="/#"
                target="_blank"
              >
                <el-button>
                  View on NIH Reporter
                </el-button>
              </a>
            </template>
          </content-overview-card>
        </el-row>
      </el-col>
      <el-col>
        <el-row style="margin: 2rem 2rem">
          <list-card
            :data="listCardDataStyleOne"
          />
        </el-row>
        <el-row style="margin: 2rem 2rem">
          <list-card
            :data="listCardDataStyleTwo.data"
            :sectionText="listCardDataStyleTwo.text"
            :sectionUrl="listCardDataStyleTwo.url"
          />
        </el-row>
      </el-col>
    <el-select v-model="value" placeholder="Select">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <div>
      <el-popover
        title="How do filters work?"
        width="190"
        trigger="hover"
        :append-to-body=false
        class="popover"
        >
        <template v-slot:reference>
          <el-button>Hover to show popover</el-button>
        </template>
        <div>
          <strong>Within categories:</strong> OR 
          <br/>
          example: 'heart' OR 'colon'
          <br/>
          <br/>
          <strong>Between categories:</strong> AND
          <br/>
          example: 'rat' AND 'lung'
        </div>
      </el-popover>
    </div>
    <pagination
      :total-count="pageCount"
      :selected="selectedPage"
      @select-page="onPaginationChange"
    />      
    <pagination-menu
      class="mb-24"
      :page-size="pageSize"
      @update-page-size="updatePageSize"
    />
    <content-tab-card
      :tabs="contentTabCard.tabs"
      :active-tab-id="contentTabCard.activeTabId"
      @tab-changed="tabChanged"
    >
      <div
        v-for="tab in contentTabCard.tabs"
        :key="tab.id"
      >
        <div
          v-show="contentTabCard.activeTabId === tab.id" 
        >
          Content for {{tab.label}} goes here!
        </div>
      </div>
    </content-tab-card>
  </main>
</template>

<script>
  import ListCard from './components/ListCard/ListCard.vue'
  import HelloWorld from './components/HelloWorld.vue'
  import SparcTooltip from './components/SparcTooltip.vue'
  import SparcLogo from './components/SparcLogo.vue'
  import LargeModal from './components/largemodal.vue'
  import SparcRadio from './components/SparcRadio.vue'
  import SparcCheckbox from './components/SparcCheckbox.vue'
  import DropdownMultiselect from './components/DropdownMultiselect/DropdownMultiselect.vue'
  import Pagination from './components/Pagination.vue'
  import PaginationMenu from './components/PaginationMenu.vue'
  import BreadcrumbTrail from './components/BreadcrumbTrail.vue'
  import IconCard from './components/IconCard.vue'
  import ContentOverviewCard from './components/ContentOverviewCard.vue'
  import ContentTabCard from './components/ContentTabCard.vue'
  import EventCard from './components/EventCard.vue'
  import MultiSelect from './components/MultiSelect.vue'
  import { Folder } from '@element-plus/icons-vue'

  import { ref } from 'vue'
  import { successMessage, infoMessage, failMessage, informationNotification, iconInformationNotification } from "../utils/notificationMessages"


  const listCardDataStyleOne= [
        {
          title: "Prototype simulation of undiseased human cardiac ventricular cells",
          summary: "A prototype use-case package consisting of a single-cell, 1D and 2D tissue model for simulation of autonomic effects on the cardiovascular system derived from the human ventricular model developed by O'Hara and Rudy group.",
          date: "2020-04-04T10:36:01.516Z",
          url: "/#",
          image: "https://via.placeholder.com/128"
        },
        {
          title: "Prototype simulation of undiseased human cardiac ventricular cells",
          summary: "A prototype use-case package consisting of a single-cell, 1D and 2D tissue model for simulation of autonomic effects on the cardiovascular system derived from the human ventricular model developed by O'Hara and Rudy group.",
          date: "2020-04-04T10:36:01.516Z",
          url: "/#",
          image: "https://via.placeholder.com/128"
        },
        {
          title: "Prototype simulation of undiseased human cardiac ventricular cells",
          summary: "A prototype use-case package consisting of a single-cell, 1D and 2D tissue model for simulation of autonomic effects on the cardiovascular system derived from the human ventricular model developed by O'Hara and Rudy group.",
          date: "2020-04-04T10:36:01.516Z",
          url: "/#",
          image: "https://via.placeholder.com/128"
        }
      ];
      const listCardDataStyleTwo ={
        data: [{
          title: "Prototype simulation of undiseased human cardiac ventricular cells",
          summary: "A prototype use-case package consisting of a single-cell, 1D and 2D tissue model for simulation of autonomic effects on the cardiovascular system derived from the human ventricular model developed by O'Hara and Rudy group.",
          date: "2020-04-04T10:36:01.516Z",
          url: "/#"
        },
        {
          title: "Prototype simulation of undiseased human cardiac ventricular cells",
          summary: "A prototype use-case package consisting of a single-cell, 1D and 2D tissue model for simulation of autonomic effects on the cardiovascular system derived from the human ventricular model developed by O'Hara and Rudy group.",
          date: "2020-04-04T10:36:01.516Z",
          url: "/#"
        },
        {
          title: "Prototype simulation of undiseased human cardiac ventricular cells",
          summary: "A prototype use-case package consisting of a single-cell, 1D and 2D tissue model for simulation of autonomic effects on the cardiovascular system derived from the human ventricular model developed by O'Hara and Rudy group.",
          date: "2020-04-04T10:36:01.516Z",
          url: "/#"
        }],
        text: "Show all News",
        url: "/#"
      }

  const eventCardEvent = {
        type: "Conference",
        image: "https://via.placeholder.com/736",
        title: "SPARC and Experimental Biology (EB)",
        startDate: "2020-04-04T10:36:01.516Z",
        endDate:"2020-04-07T10:36:01.516Z",
        location: "San Diego, California",
        url: "/#"
      }


  const checkboxItem = ref([
      {
        label: 1,
        display: "Option 1",
        disabled: false
      },
      {
        label: 2,
        display: "Option 2",
        disabled: false
      },
      {
        label: 3,
        display: "Option 3",
        disabled: false
      }
    ]);

  const contentOverviewCard={
        subtitle: 'Cardio-respiratory system: heart',
        title: 'Comprehensive structural and functional mapping of the mammalian cardiac nervous system',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing',
        image: 'https://via.placeholder.com/736',
        metadata: [{
          title: 'NIH Award',
          value: '000000000000'
        },
        {
          title: 'Principal Investigator',
          value: 'Fynn Blackwell'
        },
        {
          title: 'Institution',
          value: 'University of California Los Angeles'
        }],
      }
  const iconCardData={
     title:'Browse Data By Category',
     icons: [{
      title: 'Bladder',
      image: 'https://via.placeholder.com/736',
      linkComponent: 'router-link',
      href: '/bladder'
    },
    {
      title: 'Colon',
      image: 'https://via.placeholder.com/736',
      linkComponent: 'router-link',
      href: '/colon'
    },
    {
      title: 'Esophogus',
      image: 'https://via.placeholder.com/736',
      linkComponent: 'router-link',
      href: '/esophogus'
    },
    {
      title: 'Female Reproductive System',
      image: 'https://via.placeholder.com/736',
      linkComponent: 'router-link',
      href: '/female-reproductive-system'
    },
    {
      title: 'Heart',
      image: 'https://via.placeholder.com/736',
      linkComponent: 'router-link',
      href: '/heart'
    },
    {
      title: 'Kidney',
      image: 'https://via.placeholder.com/736',
      linkComponent: 'router-link',
      href: '/kidney'
    },
    {
      title: 'Liver',
      image: 'https://via.placeholder.com/736',
      linkComponent: 'router-link',
      href: '/liver'
    },
    {
      title: 'Lungs',
      image: 'https://via.placeholder.com/736',
      linkComponent: 'router-link',
      href: '/lungs'
    },
    {
      title: 'Male Reproductive System',
      image: 'https://via.placeholder.com/736',
      linkComponent: 'router-link',
      href: '/male-reproductive-system'
    },
    {
      title: 'Small Intestine',
      image: 'https://via.placeholder.com/736',
      linkComponent: 'router-link',
      href: '/small-intestine'
    },
    {
      title: 'Spleen',
      image: 'https://via.placeholder.com/736',
      linkComponent: 'router-link',
      href: '/spleen'
    },
    {
      title: 'Stomach',
      image: 'https://via.placeholder.com/736',
      linkComponent: 'router-link',
      href: '/stomach'
    }]
  }
  const multiLevelSelectOptions= [{
        value: 1,
        label: 'Asia',
        children: [{
          value: 2,
          label: 'China',
        }, {
          value: 6,
          label: 'Japan',
        }, {
          value: 10,
          label: 'Korea',
        }]
      }, {
        value: 14,
        label: 'Europe',
        children: [{
          value: 15,
          label: 'France'
        }, {
          value: 19,
          label: 'UK',
        }]
      }, {
        value: 23,
        label: 'North America',
        children: [{
          value: 24,
          label: 'US'
        }, {
          value: 25,
          label: 'Canada'
        }]
      }]
     const singleLevelSelectOptions= [{
        value: 1,
        label: 'Asia',
      }, {
        value: 14,
        label: 'Europe',
      }, {
        value: 23,
        label: 'North America',
      }]

  const tableData = [{
    "id": 37,
    "sourceDatasetId": 344,
    "name": "Mapping of ICN Neurons in a 3D Reconstructed Rat Heart",
    "description": "Single intrinsic cardiac nervous system (ICN) neurons were marked in an image volume of heart sections that was anatomically delineated for the 3D reconstruction of the whole heart with mapped locations of individual ICN neurons.",
    "ownerId": 467,
    "ownerFirstName": "Clara",
    "ownerLastName": "Leung",
    "ownerOrcid": "0000-0003-4479-7608",
    "organizationName": "SPARC Consortium",
    "organizationId": 367,
    "license": "Creative Commons Attribution",
    "tags": [
      "rattus norvegicus",
      "knife edge scanning microscopy",
      "rodent cardiac anatomy",
      "rat intrinsic cardiac neurons"
    ],
    "version": 2,
    "revision": null,
    "size": 55707640131,
    "modelCount": [
      { "modelName": "researcher", "count": 11 },
      { "modelName": "term", "count": 4 },
      { "modelName": "award", "count": 1 },
      { "modelName": "animal_subject", "count": 1 },
      { "modelName": "sample", "count": 1 },
      { "modelName": "protocol", "count": 0 },
      { "modelName": "summary", "count": 1 }
    ],
    "fileCount": 23,
    "recordCount": 19,
    "uri": "s3://blackfynn-discover-use1/37/2/",
    "arn": "arn:aws:s3:::blackfynn-discover-use1/37/2/",
    "status": "PUBLISH_SUCCEEDED",
    "doi": "10.26275/wcje-hxib",
    "banner": "https://assets.discover.pennsieve.io/dataset-assets/37/2/banner.jpg",
    "readme": "https://assets.discover.pennsieve.io/dataset-assets/37/2/readme.md",
    "contributors": [
      {
        "firstName": "Clara",
        "middleInitial": null,
        "lastName": "Leung",
        "degree": "M.S.",
        "orcid": "0000-0003-4479-7608"
      },
      {
        "firstName": "Jin",
        "middleInitial": null,
        "lastName": "Chen",
        "degree": null,
        "orcid": "0000-0001-7617-1664"
      },
      {
        "firstName": "Alison ",
        "middleInitial": null,
        "lastName": "Moss",
        "degree": null,
        "orcid": "0000-0002-7907-8796"
      },
      {
        "firstName": "Susan",
        "middleInitial": null,
        "lastName": "Tappan",
        "degree": null,
        "orcid": "0000-0001-5120-3770"
      },
      {
        "firstName": "Maci",
        "middleInitial": null,
        "lastName": "Heal",
        "degree": null,
        "orcid": "0000-0001-5097-1030"
      },
      {
        "firstName": "Todd",
        "middleInitial": null,
        "lastName": "Huffman",
        "degree": null,
        "orcid": null
      },
      {
        "firstName": "Navid",
        "middleInitial": null,
        "lastName": "Farahani",
        "degree": null,
        "orcid": null
      },
      {
        "firstName": "Leonard",
        "middleInitial": null,
        "lastName": "Eisenman",
        "degree": null,
        "orcid": null
      },
      {
        "firstName": "Zixi",
        "middleInitial": null,
        "lastName": "Cheng",
        "degree": null,
        "orcid": "0000-0002-3722-6455"
      },
      {
        "firstName": "Raj",
        "middleInitial": null,
        "lastName": "Vadigepalli",
        "degree": null,
        "orcid": "0000-0002-8405-1037"
      },
      {
        "firstName": "James",
        "middleInitial": null,
        "lastName": "Schwaber",
        "degree": null,
        "orcid": "0000-0003-0598-7345"
      }
    ],
    "sponsorship": {
      "title": "NIH SPARC Program",
      "imageUrl": "https://assets.discover.pennsieve.io/dataset-assets/sponsorships/sparc_logo.svg",
      "markup": "Explore this dataset in greater detail on the <a href=http://data.sparc.science/datasets/37>SPARC Portal</a> where you will find additional resources and related datasets."
    },
    "blackfynnSchemaVersion": "4.0",
    "createdAt": "2020-08-04T18:22:07.454864Z",
    "updatedAt": "2020-08-04T18:32:14.911827Z",
    "firstPublishedAt": "2019-08-14T20:25:02.609321Z",
    "versionPublishedAt": "2020-08-04T18:22:07.454864Z",
    "revisedAt": null,
    "embargo": false
  },
  {
    "id": 16,
    "sourceDatasetId": 66,
    "name": "Rat Vagus Nerve Stained with Masson's Trichrome",
    "description": "Micrographs of cross sections of cervical and abdominal rat vagus nerve stained with Masson's trichrome.",
    "ownerId": 238,
    "ownerFirstName": "Nicole",
    "ownerLastName": "Pelot",
    "ownerOrcid": "0000-0003-2844-0190",
    "organizationName": "SPARC Consortium",
    "organizationId": 367,
    "license": "Creative Commons Attribution",
    "tags": [
      "vagus nerve stimulation",
      "rattus norvegicus",
      "autonomic nervous system",
      "vagus nerve morphology",
      "neural anatomy",
      "vagus nerve"
    ],
    "version": 5,
    "revision": null,
    "size": 2760065720,
    "modelCount": [
      { "modelName": "researcher", "count": 7 },
      { "modelName": "term", "count": 5 },
      { "modelName": "award", "count": 1 },
      { "modelName": "animal_subject", "count": 10 },
      { "modelName": "sample", "count": 27 },
      { "modelName": "protocol", "count": 1 },
      { "modelName": "summary", "count": 1 }
    ],
    "fileCount": 163,
    "recordCount": 52,
    "uri": "s3://blackfynn-discover-use1/16/5/",
    "arn": "arn:aws:s3:::blackfynn-discover-use1/16/5/",
    "status": "PUBLISH_SUCCEEDED",
    "doi": "10.26275/z3ab-7j9y",
    "banner": "https://assets.discover.pennsieve.io/dataset-assets/16/5/banner.jpg",
    "readme": "https://assets.discover.pennsieve.io/dataset-assets/16/5/readme.md",
    "contributors": [
      {
        "firstName": "Nicole",
        "middleInitial": null,
        "lastName": "A. Pelot",
        "degree": null,
        "orcid": null
      },
      {
        "firstName": "J.",
        "middleInitial": null,
        "lastName": "Ashley Ezzell",
        "degree": null,
        "orcid": null
      },
      {
        "firstName": "Gabriel",
        "middleInitial": null,
        "lastName": "B. Goldhagen",
        "degree": null,
        "orcid": null
      },
      {
        "firstName": "Eric",
        "middleInitial": null,
        "lastName": "Musselman",
        "degree": null,
        "orcid": "0000-0001-5295-7267"
      },
      {
        "firstName": "Jake",
        "middleInitial": null,
        "lastName": "E. Cariello",
        "degree": null,
        "orcid": null
      },
      {
        "firstName": "Kara",
        "middleInitial": null,
        "lastName": "A. Clissold",
        "degree": null,
        "orcid": null
      },
      {
        "firstName": "Warren",
        "middleInitial": null,
        "lastName": "M. Grill",
        "degree": null,
        "orcid": null
      }
    ],
    "sponsorship": {
      "title": "NIH SPARC Program",
      "imageUrl": "https://assets.discover.pennsieve.io/dataset-assets/sponsorships/sparc_logo.svg",
      "markup": "Explore this dataset in greater detail on the <a href=http://data.sparc.science/datasets/16>SPARC Portal</a> where you will find additional resources and related datasets."
    },
    "blackfynnSchemaVersion": "4.0",
    "createdAt": "2020-08-04T17:57:13.145628Z",
    "updatedAt": "2020-08-04T18:10:08.448118Z",
    "firstPublishedAt": "2019-07-16T18:55:19.664Z",
    "versionPublishedAt": "2020-08-04T17:57:13.145628Z",
    "revisedAt": null,
    "embargo": false
  }]

  const dropdownMultiselectTooltip = "This is a very long test<br/>tooltip for the dropdown<br/>multiselect component."
  const oneOptionsDropdownMultiselectCategory = {
    label: 'One Option',
    id: '0',
    data: [
    {
      label: 'One',
      id: '1',
    }]
  }
  const twoOptionsDropdownMultiselectCategory = {
    label: 'Two Options',
    id: '0',
    data: [
    {
      label: 'One',
      id: '1',
    },
    {
      label: 'Two',
      id: '2',
    }]
  }
  const nineOptionsDropdownMultiselectCategory = {
    label: 'Nine Options',
    id: '0',
    data: [
    {
      label: 'One.One',
      id: '1',
    },
    {
      label: 'One.Two',
      id: '2',
    },
    {
      label: 'Three',
      id: '3',
    },
    {
      label: 'Four',
      id: '4',
    },
    {
      label: 'Five',
      id: '5',
    },
    {
      label: 'Six',
      id: '6',
    },
    {
      label: 'Seven',
      id: '7',
    },
    {
      label: 'Eight',
      id: '8',
    },
    {
      label: 'Nine',
      id: '9',
    }]
  }
  const multiLevelDropdownMultiselectCategory = {
    label: 'Multi-Level',
    id: '0',
    data: [
    {
      label: 'One',
      id: '1',
      children: [
      {
        label: 'Child One',
        id: '6',
      },
      {
        label: 'Child Two',
        id: '7',
      },
      {
        label: 'Child Three',
        id: '8',
      }]
    },
    {
      label: 'Two',
      id: '2',
    },
    {
      label: 'Three',
      id: '3',
      children: [
      {
        label: 'Child One',
        id: '9',
      },
      {
        label: 'Child Two',
        id: '10',
      },
      {
        label: 'Child Three',
        id: '11',
      },
      {
        label: 'Child Four',
        id: '12',
      },
      {
        label: 'Child Five',
        id: '13',
      },
      {
        label: 'Child Six',
        id: '14',
      },
      {
        label: 'Child Seven',
        id: '15',
      },
      {
        label: 'Child Eight',
        id: '16',
      },
      {
        label: 'Child Nine',
        id: '17',
      }]
    },
    {
      label: 'Four',
      id: '4',
    },
    {
      label: 'Five',
      id: '5',
    }]
  }
  const fifteenOptionsDropdownMultiselectCategory = {
    label: 'Fifteen Options',
    id: '0',
    data: [
    {
      label: 'One',
      id: '1',
    },
    {
      label: 'Two',
      id: '2',
    },
    {
      label: 'Three',
      id: '3',
    },
    {
      label: 'Four',
      id: '4',
    },
    {
      label: 'Five',
      id: '5',
    },
    {
      label: 'Six',
      id: '6',
    },
    {
      label: 'Seven',
      id: '7',
    },
    {
      label: 'Eight',
      id: '8',
    },
    {
      label: 'Nine',
      id: '9',
    },
    {
      label: 'Ten',
      id: '10'
    },
    {
      label: 'Eleven',
      id: '11',
    },
    {
      label: 'Twelve',
      id: '12',
    },
    {
      label: 'Thirteen',
      id: '13',
    },
    {
      label: 'Fourteen',
      id: '14',
    },
    {
      label: 'Fifteen',
      id: '15'
    }]
  }
  const selectOpts = [
    {
      label: 'Group 1',
      options: [
        {
          value: 'Option1',
          label: 'Option 1'
        },
        {
          value: 'Option2',
          label: 'Option 2'
        },
      ]
    },
    {
      label: 'Group 2',
      options: [
        {
          value: 'Option3',
          label: 'Option 3'
        },
        {
          value: 'Option4',
          label: 'Option 4'
        },
      ]
    },
  ]
  const options = [{
      value: 'Option1',
      label: 'Option1'
    }, {
      value: 'Option2',
      label: 'Option2'
    }, {
      value: 'Option3',
      label: 'Option3'
    }, {
      value: 'Option4',
      label: 'Option4'
    }, {
      value: 'Option5',
      label: 'Option5'
    }]
    const breadcrumbs= [{
        label: "Home",
        to: "/home"
      }, {
        label: "Level 2",
        to: "/#"
      }
    ]
    const contentTabCard = {
      tabs: [{
        label: 'Team Information', 
        id: 'Team Information'
      },
      {
        label: 'Diseases', 
        id: 'Diseases'
      },
      {
        label: 'Datasets', 
        id: 'Datasets',
        href: '/#'
      }],
      activeTabId: "Team Information"
    }
  export default {
    components: {
      HelloWorld,
      SparcTooltip,
      SparcLogo,
      LargeModal,
      SparcRadio,
      SparcCheckbox,
      DropdownMultiselect,
      Pagination,
      PaginationMenu,
      BreadcrumbTrail,
      IconCard,
      ContentOverviewCard,
      ContentTabCard,
      EventCard,
      MultiSelect,
      ListCard,
      Folder,
    },
    name: 'App',
    setup() {
      const tooltipDirs = ref([
        'top-left',
        'top-center',
        'top-right',
        'left-top',
        'left-center',
        'left-bottom',
        'bottom-left',
        'bottom-center',
        'bottom-right',
        'right-top',
        'right-center',
        'right-bottom'
      ])
      const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
      let value = ref('')
      let selectVal = ref([])
      const radioVal=ref("1")
      const radioVal2 = ref(5)
      const radios = ref([
        {
          label: 4,
          display: "Option 1",
          disabled: false
        },
        {
          label: 5,
          display: "Option 2",
          disabled: false
        },
        {
          label: 6,
          display: "Option 3",
          disabled: true
        }
      ])
      const checkboxVal = ref(["1"]);
      checkboxVal.value.push("2");
      const checkboxVal2 = ref([]);
      const dialogVisible = ref(false)
      const dialogVisibleLarge = ref(false)
      const pageSize= ref(10)
      const pageCount= ref(100)
      const selectedPage = ref(3)
      const tabCard = ref(contentTabCard)
      const month = ref('Mar')
      const year = ref(2020)

      return {
        months,
        month,
        year,
        checkboxVal,
        checkboxVal2,
        checkboxItem,
        dropdownMultiselectTooltip,
        oneOptionsDropdownMultiselectCategory,
        twoOptionsDropdownMultiselectCategory,
        nineOptionsDropdownMultiselectCategory,
        multiLevelDropdownMultiselectCategory,
        fifteenOptionsDropdownMultiselectCategory,
        dialogVisible,
        dialogVisibleLarge,
        tableData,
        tooltipDirs,
        radioVal,
        radioVal2,
        radios,
        value,
        selectVal,
        selectOpts,
        options,
        pageSize,
        pageCount,
        selectedPage,
        breadcrumbs,
        iconCardData,
        contentOverviewCard,
        listCardDataStyleOne,
        listCardDataStyleTwo,
        contentTabCard: tabCard,
        eventCardEvent,
        singleLevelSelectOptions,
        multiLevelSelectOptions

      }
    },
    methods: {
      openSuccessMessage() {
        successMessage(`Success!`)
      },
      openFailMessage() {
        failMessage(`Failure.`)
      },
      openInfoMessage() {
        infoMessage(`Information`)
      },
      openNotification() {
        informationNotification('Notification Title', 'This is a notification.')
      },
      openNotificationWithIcon() {
        iconInformationNotification('Notification Title', 'This is a notification with an icon.')
      },
      openDialog() {
        this.dialogVisible = true
      },
      onPaginationChange: function(page) {
        this.selectedPage = page
      },
      updatePageSize: function(limit) {
        this.pageSize = limit === 'View All' ?  100 : limit
        this.pageCount = limit === 'View All' ?  100 : limit
      },
      tabChanged(newTab) {
        this.contentTabCard.activeTabId = newTab.id
      },
    }
  }
</script>

<style scoped lang="scss">

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
  height: 100px;
  width:100px;
}

.tooltip {
  display: flex;
  align-content: space-around;
  flex-wrap: wrap;
  flex-direction: row;
}

.tooltip-item {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.dropdown-multiselect {
  width: 14rem !important;
  .el-row:not(:last-child) .dropdown-multiselect-border {
    border-bottom: none !important;
  }
}
.event-card-row {
  .el-col {
    width: 100%;
    @media (min-width: 48em) {
      width: 50%;
    }
    @media (min-width: 64em) {
      width: 25%;
    }
  }
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
