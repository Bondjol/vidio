const axios = require('axios');
const qs = require('qs');
const faker = require('faker');
const green = '\x1b[32m';
const red = '\x1b[31m';
const white = '\x1b[37m';

async function registAccount() {
  try {
    let BERHASIL = false;
    while (!BERHASIL) {
      const firstName = faker.name.firstName();
      const lastName = faker.name.lastName();
      const email = `${firstName}1${lastName}@gmail.com`;
      const password = 'masuk123'
      console.log(`Proses membuat akun: ${email} | ${password}`);
      let data = qs.stringify({
        // 'utf8': '✓',
        'authenticity_token': 'EB1bVj6fPvfctip980VpAl6TIeB2Dr3QIJWmHV6b9Bo_4RHUytHwBQOk72saBLHVJifh0kqJv-Jk8QHXpbFmPQ',
        'user[email]': email,
        'user[password]': password,
        // 'commit': 'Daftar' 
      });
      
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://www.vidio.com/users',
        headers: { 
          'cookie': 'ahoy_visitor=0847e9fb-c183-4b9b-b145-29ee25e9ec5a; _gcl_au=1.1.2013972142.1700210287; _fbp=fb.1.1700210287196.435318328; afUserId=e93d5240-51b5-4d24-98cc-d6f436704d27-p; connectId={"ttl":86400000,"lastUsed":1701995087896,"lastSynced":1701995087896}; cto_bundle=UNNkMV9UVDh1Rm5HWThldUxzVWdnZUZteXk4UVo1Y1dId012WUlHdWg2WnA1eFpWRzclMkZEZmVMNjA3NiUyQjJGV2lZTXhQJTJGTXFpZVVTTHRvR3IwaDRzWGtsbnhadlo5TEFjeDBldlNGOGl1SGUwNzBHS0h5QXE1ZjcyZ1RBU2FSTGJ5SyUyRlhjUkFOZDFBQTFPQU45JTJCSHlwN2xOTjBTZElZS0E3QWZkZUU5cGdadDhOT01yUTZHMEFXdXVDcDZjJTJCbzBqeERHN29XcFhQNWRPSFVzbWd0RFQwMkdEenNMQmpVdXhybDR2TnFrblJ0JTJCUlRHbjV4YmNCY3czZzNkeGFNYkY5VmU5ZkM; AF_SYNC=1704528227268; _gid=GA1.2.1818987367.1704635433; _ce.clock_event=1; _ce.clock_data=-546%2C180.242.128.246%2C1%2C9c1ce27f08b16479d2e17743062b28ed; plenty_id=150346585; FCNEC=%5B%5B%22AKsRol_SDRPJvYu7pPa2LV8e0mKipuxC2FRVPH0b9EKQmx87V9yPSvIrQbocsXEBPw3n5dYZmqhH50PROXmFFitLW10uXKzErE1fXkmd71MjpqsF19MM6EMF3CDj2C5RtQe8d3-22jCuUhwOGXFEJg-CVAvynDmbhg%3D%3D%22%5D%5D; ahoy_visit=c1db4fca-9eee-4a21-904b-8ea8898dbea8; flash=%7B%7D; _ga_JBTBSESXVN=GS1.1.1704718202.17.1.1704718203.59.0.0; _ga=GA1.1.1636620209.1700210287; _vidio_session=a0hZdTA0bEZYdGR0ZGhwc2ZMekpPTUpaTEFhblpUemRDWWtFZ2VsaFZiQ1hIUWpqY1J2dG5hb3BsTk13eUFQVndJb1drd3Z3b3E3RXVnYTZkM2w0c0VUZXpxUmJuS3M5bERnLzlzUVpZSHNoaE52L0hnT24zQW1OVDdqcGVTeXFyRnNvcGJuUVlwbkxqNkJ3MnRzTGJjRU9zV2w4TC9xZ1R1M0o5QndHWjdRQkNKbE1idStzSVNqNUFMZG9jLzl4OG81czdmYjNoSEJkL0R5cUZ1TVNBQVpzK2N6dUZsNWtvYUxvbktSUU9hRHRGTWtUYzA4c3B5cGI0SHZ4SXQ0b3haWnNvU0ZEOCtZaVJPOGF1WThuVVFpMlJwQmpIWE1XUTFseEltOW4xVXhOeVpiMjBEeFpTS0o0QUxMbWVQNkk5blZSVGpOUjBBcUZaNXhyU29hRjJoL0FjL2duMUVDaXp0TmluSTZuWng0PS0tT0FQMG9STlJadGlTMkdhZUhPUTErQT09--2d54274a142efe75a9466a8ac80587993b56bcdf; moe_uuid=73c36442-9724-400b-8e31-b5630ec13f37; _ce.irv=returning; cebs=1; cebsp_=1; visitor_fp_id=10b95e45eabb1d71f1ac8b74f10e0b33; _ce.s=v~608b32bd5beb71289f9af200c0ad61c69bbdf0e5~lcw~1704718292836~lva~1704718205071~vpv~11~v11.fhb~1704718205081~v11.lhb~1704718265083~as~false~v11slnt~1704692864802~v11.cs~265059~v11.s~72110dc0-ae24-11ee-ad90-83c86e173479~v11.sla~1704718292722~gtrk.la~lr4x9944~v11.send~1704718292837~lcw~1704718292837; _vidio_session=aERCV2dIcmVHREZRUkM5NkJKZkhpeGNveFU2RFVubFRLODUveEJ4S0lUUHBzalB4eHVBNDlLcE42bU9rb2xjekN6R0N1Y1M1WDFGRmIvN2ZaVmtQM280dEQvaURxKzBOMVRZdGNMZEZyamVKU2FPSDhkaFhaVGMyejVyelFMQjZva1VsNmVOL3ZTRGZVQXhwU2dFRjRhZW1pcUhZRXN1WUlsejMxdnVLQzJPcjZwbFM1RzdPMHRxcGFFaWpla2VnSkNlcGJFS2prdjNtYkwvREpvRytzdHNOSno0bC9aMWZhTWV6dlJVTmFzZi81T2UxcUUyamdmRFcrQWZvZG1ZQU15TnVTd3UzZFZxekdYc0dFNmRsd3NnRjd0bW1ZOU85S2RldkJaUm5NR2Z5UmtNSDF0QXZSQjN3MXJNVVIxcFN0OFZCa1pLU1V1Q2pJazlzNWcwVHBYWUFYeWQzaEpDTlZkdHZZRml6eStSeGpIeFhEck9hRVIzY1VRdVBnbThHUXRsY0h2Smg5bzRIUGREd2NoY0hKODd5dzE5dmwycE9FK2V1MGlMV2g3WDJMMlQ4aWQvRUdNeWNyYU1wbUduempDQjhSNlJxQnNIbUM5ZHlaemFqWmFNdlRrODYvN0c0dnVoWUNJaitPZ0ZkUUxUTmJibWk5Q0JuN3VodnBESE5vOWdnSmdWTjQwRktJWXp6ZStZemVTamR5TnliZFhKZ1oxTzlNdzcvNXNYZVZhOWozRUc5aER4OFk5T3FFaTk5VkM2b25aWFcwRDJpTk9JUUlnZjNJTWZDckhTYlZvYTFIMWRMYVljU0lYdTRRbU9XWS9hV2ppWVZVaDN6NVFmZUV0dzROVXdESmZabElMSkZOL1BwWjA5WEkrWEduZmpFdUdhelByL2djYnhwVXlMeDV3UGJvajFmNTZ5Z2hRM0hQcjRxTGlGWVAyWFE1YjNUeTN4Qjl3PT0tLWczakMvNjFqeHhjaGxWZlNEcEpCcHc9PQ%3D%3D--04275746469df04047d92d00c717b94239e19bc4; flash=%7B%22notice%22%3A%22Selamat+datang%21+Anda+telah+berhasil+mendaftarkan+diri%21%22%7D; plenty_id=150365457; shva=1; show_age_gender_modal=true', 
        },
        data : data
      };
      try {
        const response = await axios.request(config);
        const responseData = response.data;
        if (responseData.includes('<h3>Dengan memverifikasi email, Anda dapat melakukan:</h3>')) {
          console.log(`${green}Berhasil!${white}`);
        } else {
          console.log(`${red}Gagal!${white}`);
        }
      } catch (error) {
        console.log(`${red}Failure!${white}`);
      }
    }
  } catch (error) {
    console.log(error);
  }
}

registAccount();