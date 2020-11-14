#include<iostream>
#include<math.h>
using namespace std;
long long giaithua(int n){
	if( n == 1){
		return 1;
	}
	return giaithua(n-1)*n;
}
main(){
	int t;
	do{
		int n;
		cin>>n;
		if(n == 0){
			break;
		}
		else{
			cout<<giaithua(n)<<endl;
			}	
	
	}while(1);
	return 0;
}

