<script>
import Layout from "../../../layouts/main";
import appConfig from "@/app.config";
import PageHeader from "@/components/page-header";

/**
 * Lending component
 */
export default {
  page: {
    title: "Wallet",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: "Wallet",
      items: [
        {
          text: "Bloxcross",
          href: "/"
        },
        {
          text: "Wallet",
          active: true
        }
      ]
    };
  }
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />

    <div class="row">


      <div class="col-xl-8">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Deposits</h4>

            <div class="row">
              <div class="col-lg-4">
                <div class="border p-3 rounded mt-4">
                  <div class="d-flex align-items-center mb-3">
                    <div class="avatar-xs me-3">
                      <span
                        class="avatar-title rounded-circle bg-soft bg-warning text-warning font-size-18"
                      >
                        <i class="mdi mdi-bitcoin"></i>
                      </span>
                    </div>
                    <h5 class="font-size-14 mb-0">Bitcoin</h5>
                  </div>

                  <div class="row">
                    <div class="col-lg-6">
                      <div class="text-muted mt-3">
                        <p>Annual Yield</p>
                        <h4>4.05 %</h4>
                        <p class="mb-0">0.00745 BTC</p>
                      </div>
                    </div>

                    <div class="col-lg-6 align-self-end">
                      <div class="float-end mt-3">
                        <a href="javascript: void(0);" class="btn btn-primary">Select</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="border p-3 rounded mt-4">
                  <div class="d-flex align-items-center mb-3">
                    <div class="avatar-xs me-3">
                      <span
                        class="avatar-title rounded-circle bg-soft bg-primary text-primary font-size-18"
                      >
                        <i class="mdi mdi-ethereum"></i>
                      </span>
                    </div>
                    <h5 class="font-size-14 mb-0">Ethereum</h5>
                  </div>

                  <div class="row">
                    <div class="col-lg-6">
                      <div class="text-muted mt-3">
                        <p>Annual Yield</p>
                        <h4>5.08 %</h4>
                        <p class="mb-0">0.0056 ETH</p>
                      </div>
                    </div>

                    <div class="col-lg-6 align-self-end">
                      <div class="float-end mt-3">
                        <a href="javascript: void(0);" class="btn btn-primary">Select</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="border p-3 rounded mt-4">
                  <div class="d-flex align-items-center mb-3">
                    <div class="avatar-xs me-3">
                      <span class="avatar-title rounded-circle bg-soft bg-info text-info font-size-18">
                        <i class="mdi mdi-litecoin"></i>
                      </span>
                    </div>
                    <h5 class="font-size-14 mb-0">Litecoin</h5>
                  </div>

                  <div class="row">
                    <div class="col-lg-6">
                      <div class="text-muted mt-3">
                        <p>Annual Yield</p>
                        <h4>4.12 %</h4>
                        <p class="mb-0">0.00245 LTC</p>
                      </div>
                    </div>

                    <div class="col-lg-6 align-self-end">
                      <div class="float-end mt-3">
                        <a href="javascript: void(0);" class="btn btn-primary">Select</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">My Assets</h4>

            <div class="table-responsive">
              <table class="table table-nowrap table-centered mb-0 align-middle">
                <thead>
                  <tr>
                    <th scope="col">Token</th>
                    <th scope="col">Price</th>
                    <th scope="col">Invest</th>
                    <th scope="col">Loans</th>
                    <th scope="col" colspan="2">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <div class="d-flex align-items-center">
                        <div class="avatar-xs me-3">
                          <span
                            class="avatar-title rounded-circle bg-soft bg-warning text-warning font-size-18"
                          >
                            <i class="mdi mdi-bitcoin"></i>
                          </span>
                        </div>
                        <span>BTC</span>
                      </div>
                    </th>
                    <td>
                      <div class="text-muted">$ 7525.47</div>
                    </td>
                    <td>
                      <h5 class="font-size-14 mb-1">1.2601</h5>
                      <div class="text-muted">$6225.74</div>
                    </td>
                    <td>
                      <h5 class="font-size-14 mb-1">0.1512</h5>
                      <div class="text-muted">$742.32</div>
                    </td>
                    <td>
                      <h5 class="font-size-14 mb-1">4.2562</h5>
                      <div class="text-muted">$6425.42</div>
                    </td>
                    <td style="width: 120px;">
                      <a href="javascript: void(0);" class="btn btn-primary btn-sm w-xs">View</a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div class="d-flex align-items-center">
                        <div class="avatar-xs me-3">
                          <span
                            class="avatar-title rounded-circle bg-soft bg-primary text-primary font-size-18"
                          >
                            <i class="mdi mdi-ethereum"></i>
                          </span>
                        </div>
                        <span>ETH</span>
                      </div>
                    </th>
                    <td>
                      <div class="text-muted">$ 4235.78</div>
                    </td>
                    <td>
                      <h5 class="font-size-14 mb-1">0.0814</h5>
                      <div class="text-muted">$3256.29</div>
                    </td>
                    <td>
                      <h5 class="font-size-14 mb-1">0.0253</h5>
                      <div class="text-muted">$675.04</div>
                    </td>
                    <td>
                      <h5 class="font-size-14 mb-1">0.0921</h5>
                      <div class="text-muted">$4536.24</div>
                    </td>
                    <td>
                      <a href="javascript: void(0);" class="btn btn-primary btn-sm w-xs">View</a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div class="d-flex align-items-center">
                        <div class="avatar-xs me-3">
                          <span
                            class="avatar-title rounded-circle bg-soft bg-info text-info font-size-18"
                          >
                            <i class="mdi mdi-litecoin"></i>
                          </span>
                        </div>
                        <span>LTC</span>
                      </div>
                    </th>
                    <td>
                      <div class="text-muted">$ 3726.06</div>
                    </td>
                    <td>
                      <h5 class="font-size-14 mb-1">0.0682</h5>
                      <div class="text-muted">$2936.14</div>
                    </td>
                    <td>
                      <h5 class="font-size-14 mb-1">0.0234</h5>
                      <div class="text-muted">$523.17</div>
                    </td>
                    <td>
                      <h5 class="font-size-14 mb-1">0.0823</h5>
                      <div class="text-muted">$3254.23</div>
                    </td>
                    <td>
                      <a href="javascript: void(0);" class="btn btn-primary btn-sm w-xs">View</a>
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">
                      <div class="d-flex align-items-center">
                        <div class="avatar-xs me-3">
                          <span
                            class="avatar-title rounded-circle bg-soft bg-warning text-warning font-size-18"
                          >
                            <i class="mdi mdi-bitcoin"></i>
                          </span>
                        </div>
                        <span>BTC</span>
                      </div>
                    </th>
                    <td>
                      <div class="text-muted">$ 7525.47</div>
                    </td>
                    <td>
                      <h5 class="font-size-14 mb-1">1.2601</h5>
                      <div class="text-muted">$6225.74</div>
                    </td>
                    <td>
                      <h5 class="font-size-14 mb-1">0.1512</h5>
                      <div class="text-muted">$742.32</div>
                    </td>
                    <td>
                      <h5 class="font-size-14 mb-1">4.2562</h5>
                      <div class="text-muted">$6425.42</div>
                    </td>
                    <td>
                      <a href="javascript: void(0);" class="btn btn-primary btn-sm w-xs">View</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->
  </Layout>
</template>