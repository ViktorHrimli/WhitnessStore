class CertificateApI {
  baseURL = "https://whitness-store.online/";
  api = "api/certificates";

  headers = {
    "Content-Type": "application/json",
  };
  method = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
  };

  async createCertificate(options) {
    try {
      var res = await fetch(this.baseURL + this.api, {
        method: this.method.POST,
        body: JSON.stringify(options),
        headers: this.headers,
      })
        .then((res) => res.json())
        .catch((e) => {
          throw new Error(e.message);
        });
      return res.data.id;
    } catch (error) {
      console.log(error);
    }
  }

  async getCertificated(uuid) {
    try {
      var res = await fetch(
        `${baseURL}${this.api}?filters[slug_id][$eq]=${uuid}`,
        {
          method: this.method.GET,
          headers: this.headers,
        }
      ).catch((e) => {
        throw new Error(e.message);
      });

      return await res.json();
    } catch (error) {
      console.log(error);
    }
  }

  async useCertificate() {
    try {
      await fetch(`${baseURL}${this.api}/${idUseCertificate}`, {
        method: this.method.PUT,
        body: JSON.stringify({
          data: {
            used: true,
          },
        }),
        headers: this.headers,
      }).catch((e) => {
        throw new Error(e.message);
      });
    } catch (error) {
      console.log(error);
    }
  }

  async activatedCertificate(id_cert) {
    try {
      await fetch(`${this.baseURL}${this.api}/${id_cert}`, {
        method: this.method.PUT,
        body: JSON.stringify({
          data: {
            activated: true,
          },
        }),
        headers: this.headers,
      }).catch((e) => {
        throw new Error(e.message);
      });
    } catch (error) {
      console.log(error);
    }
  }
}
var certificateApI = new CertificateApI();

export { certificateApI };
