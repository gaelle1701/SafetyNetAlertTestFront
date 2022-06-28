// import { TestBed } from '@angular/core/testing';

// import { FirestationsService } from './firestations.service';
// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// import { environment } from 'src/environments/environment';

// describe('FirestationsService', () => {
//   let service: FirestationsService;
//   let controller: HttpTestingController;
//   let data = [
//       { "address":"1509 Culver St", "station":"3" },
//       { "address":"29 15th St", "station":"2" },
//       { "address":"834 Binoc Ave", "station":"3" },
//       { "address":"644 Gershwin Cir", "station":"1" }
//     ];

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule],
//       providers: [FirestationsService],
//     });

//     service = TestBed.inject(FirestationsService);
//     controller = TestBed.inject(HttpTestingController);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });

//   it('should get All addresses', () => {
//     let addresses: any[] = [];
//     service.getAllAddresses().subscribe(result => {
//       addresses = result
//     });
//     let req = controller.expectOne(`${environment.baseUrl}firestations`);
//     req.flush(data);
//     expect(addresses).toEqual(data);
//   });

//   it('should method get', () => {
//     service.getAllAddresses().subscribe();
//     let req = controller.expectOne(`${environment.baseUrl}firestations`);
//     req.flush(data);
//     expect(req.request.method).toBe('GET');
//   });

//   it('should not method post', () => {
//     service.getAllAddresses().subscribe();
//     let req = controller.expectOne(`${environment.baseUrl}firestations`);
//     req.flush(data);
//     expect(req.request.method).not.toBe('POST');
//   });

//   it('should get all equal 4 entries', () => {
//     let addresses: any[] = [];
//     service.getAllAddresses().subscribe(result => {
//       addresses = result
//     });
//     let req = controller.expectOne(`${environment.baseUrl}firestations`);
//     req.flush(data);
//     expect(addresses.length).toBe(4); 
//   });

//   it('should get all not equal 10 entries', () => {
//     let addresses: any[] = [];
//     service.getAllAddresses().subscribe(result => {
//       addresses = result
//     });
//     let req = controller.expectOne(`${environment.baseUrl}firestations`);
//     req.flush(data);
//     expect(addresses.length).not.toEqual(10); 
//   });

//   it('should get all to greater than 3', () => {
//     let addresses: any[] = [];
//     service.getAllAddresses().subscribe(result => {
//       addresses = result
//     });
//     let req = controller.expectOne(`${environment.baseUrl}firestations`);
//     req.flush(data);
//     expect(addresses.length).toBeGreaterThan(3); 
//   });

//   it('should get all to greater than 6', () => {
//     let addresses: any[] = [];
//     service.getAllAddresses().subscribe(result => {
//       addresses = result
//     });
//     let req = controller.expectOne(`${environment.baseUrl}firestations`);
//     req.flush(data);
//     expect(addresses.length).not.toBeGreaterThan(6); 
//   });

//   it('should get all to less than 10', () => {
//     let addresses: any[] = [];
//     service.getAllAddresses().subscribe(result => {
//       addresses = result
//     });
//     let req = controller.expectOne(`${environment.baseUrl}firestations`);
//     req.flush(data);
//     expect(addresses.length).toBeLessThan(10); 
//   });

//   it('should get all to less than 2', () => {
//     let addresses: any[] = [];
//     service.getAllAddresses().subscribe(result => {
//       addresses = result
//     });
//     let req = controller.expectOne(`${environment.baseUrl}firestations`);
//     req.flush(data);
//     expect(addresses.length).not.toBeLessThan(2); 
//   });

//   it('should get all not null', () => {
//     let addresses: any[] = [];
//     service.getAllAddresses().subscribe(result => {
//       addresses = result
//     });
//     let req = controller.expectOne(`${environment.baseUrl}firestations`);
//     req.flush(data);
//     expect(addresses).not.toBeNull(); 
//   });

//   it('should get addresses in station 3', () => {
//     let addressesFiltered: any[] = [];
//     service.getAddressByStation("3").subscribe(addresses => {
//       addressesFiltered = addresses.filter((address: any) => address.station === '3')
//     });
//     let req = controller.expectOne(`${environment.baseUrl}firestations?station=3`);
//     req.flush(data);
//     expect(addressesFiltered.length).toEqual(2);
//   });

//   it('should get addresses in station 10 not exist', () => {
//     let addressesFiltered: any[] = [];
//     service.getAddressByStation("10").subscribe(addresses => {
//       addressesFiltered = addresses.filter((address: any) => address.station === '3')
//     });
//     let req = controller.expectOne(`${environment.baseUrl}firestations?station=10`);
//     req.flush(data);
//     expect(addressesFiltered.length).not.toEqual(10);
//   });

//   it('should address[0] match number', () => {
//     let addressesFind: any[] = [];
//     service.getAllAddresses().subscribe(addresses => {
//       addressesFind = addresses[0].address
//     });
//     let req = controller.expectOne(`${environment.baseUrl}firestations`);
//     req.flush(data);
//     expect(addressesFind).toMatch(/\d+/g);
//   });
    
//   it('should address[0] not match number', () => {
//     let addressesFind: any[] = [];
//     service.getAllAddresses().subscribe(addresses => {
//       addressesFind = addresses[0].address
//     });
//     let req = controller.expectOne(`${environment.baseUrl}firestations`);
//     req.flush(data);
//     expect(addressesFind).not.toMatch(/\[A-Z-a-z]/g);
//   });

//   it('should address[0] not contain Dede', () => {
//     let addressesFind: any[] = [];
//     service.getAllAddresses().subscribe(addresses => {
//       addressesFind = addresses[0].address
//     });
//     let req = controller.expectOne(`${environment.baseUrl}firestations`);
//     req.flush(data);
//     expect(addressesFind).not.toContain('Dede');
//   });
// });

