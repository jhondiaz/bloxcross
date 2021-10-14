<script>
// import axios from "axios";

import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

import { todoMethods, todoComputed } from "@/state/helpers";

import { tableData } from "./dataAdvancedtable";

/**
 * Advanced table component
 */
export default {
  page: {
    title: "Advanced Table",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  components: {
    Layout,
    PageHeader,
  },
  data() {
    return {
      tableData: tableData,
      title: "Advanced Table",
      items: [
        {
          text: "Tables",
          href: "/",
        },
        {
          text: "Advanced",
          active: true,
        },
      ],
      totalRows: 1,
      todoTotalRows: 1,
      currentPage: 1,
      todocurrentPage: 1,
      perPage: 10,
      todoperPage: 10,
      pageOptions: [10, 25, 50, 100],
      todoOptions: [10, 50, 100, 150, 200],
      filter: null,
      todoFilter: null,
      filterOn: [],
      todofilterOn: [],
      sortBy: "age",
      sortDesc: false,
      fields: [
        {
          key: "name",
          sortable: true,
        },
        {
          key: "position",
          sortable: true,
        },
        {
          key: "office",
          sortable: true,
        },
        {
          key: "age",
          sortable: true,
        },
        {
          key: "date",
          sortable: true,
        },
        {
          key: "salary",
          sortable: true,
        },
      ],
    };
  },
  computed: {
    ...todoComputed,
    /**
     * Total no. of records
     */
    rows() {
      return this.tableData.length;
    },

    /**
     * Todo list of records
     */
    todoList() {
      return this.todos.length;
    },
  },
  mounted() {
    this.fetchTodos();
    // Set the initial number of items
    this.totalRows = this.tableData.length;

    this.todoTotalRows = this.todos.length;
    // axios
    //   .get("http://dummy.restapiexample.com/api/v1/employees", {
    //     headers: {
    //       "Content-type": "application/json;charset=utf-8",
    //     },
    //   })
    //   .then((res) => {
    //     return res;
    //   });
  },
  methods: {
    ...todoMethods,
    /**
     * Search the table data with search input
     */
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },

    todoFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.todoTotalRows = filteredItems.length;
      this.todocurrentPage = 1;
    },
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Data Table</h4>
            <div class="row mt-4">
              <div class="col-sm-12 col-md-6">
                <div id="tickets-table_length" class="dataTables_length">
                  <label class="d-inline-flex align-items-center">
                    Show&nbsp;
                    <b-form-select
                      class="form-select form-select-sm"
                      v-model="perPage"
                      size="sm"
                      :options="pageOptions"
                    ></b-form-select
                    >&nbsp;entries
                  </label>
                </div>
              </div>
              <!-- Search -->
              <div class="col-sm-12 col-md-6">
                <div
                  id="tickets-table_filter"
                  class="dataTables_filter text-md-end"
                >
                  <label class="d-inline-flex align-items-center">
                    Search:
                    <b-form-input
                      v-model="filter"
                      type="search"
                      placeholder="Search..."
                      class="form-control form-control-sm ms-2"
                    ></b-form-input>
                  </label>
                </div>
              </div>
              <!-- End search -->
            </div>
            <!-- Table -->
            <div class="table-responsive mb-0">
              <b-table
                class="datatables"
                :items="tableData"
                :fields="fields"
                responsive="sm"
                :per-page="perPage"
                :current-page="currentPage"
                :sort-by.sync="sortBy"
                :sort-desc.sync="sortDesc"
                :filter="filter"
                :filter-included-fields="filterOn"
                @filtered="onFiltered"
              ></b-table>
            </div>
            <div class="row">
              <div class="col">
                <div
                  class="dataTables_paginate paging_simple_numbers float-end"
                >
                  <ul class="pagination pagination-rounded mb-0">
                    <!-- pagination -->
                    <b-pagination
                      v-model="currentPage"
                      :total-rows="rows"
                      :per-page="perPage"
                    ></b-pagination>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row mt-4">
              <h4 class="card-title">Data Table</h4>
              <p class="card-title-desc">
                using vuex table data render.
              </p>
              <div class="col-sm-12 col-md-6">
                <div id="tickets-table_length" class="dataTables_length">
                  <label class="d-inline-flex align-items-center">
                    Show&nbsp;
                    <b-form-select
                      class="form-select form-select-sm"
                      v-model="todoperPage"
                      size="sm"
                      :options="todoOptions"
                    ></b-form-select
                    >&nbsp;entries
                  </label>
                </div>
              </div>
            </div>
            <div class="table-responsive">
              <b-table
                :items="todos"
                responsive="sm"
                :per-page="todoperPage"
                :current-page="todocurrentPage"
                :filter="todoFilter"
                :filter-included-fields="todofilterOn"
                @filtered="todoFiltered"
              ></b-table>
            </div>
            <div class="row">
              <div class="col">
                <div
                  class="dataTables_paginate paging_simple_numbers float-end"
                >
                  <ul class="pagination pagination-rounded mb-0">
                    <!-- pagination -->
                    <b-pagination
                      v-model="todocurrentPage"
                      :total-rows="todoList"
                      :per-page="todoperPage"
                    ></b-pagination>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
